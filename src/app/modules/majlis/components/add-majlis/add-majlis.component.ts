import { takeUntil, Subject, finalize } from 'rxjs';
import { Status } from '@app/shared/enums';
import {
  Component,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, District, Majlis } from '@app/shared/interfaces';
import {
  ImageUploadService,
  MajlisService,
  ToastService,
} from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dewan-add-majlis',
  templateUrl: './add-majlis.component.html',
  styleUrls: ['./add-majlis.component.scss'],
})
export class AddMajlisComponent implements OnDestroy {
  @ViewChild('contentTemp') contentTemp!: TemplateRef<string>;

  @Input() majlis!: Majlis | undefined;
  @Input() showDetails!: boolean | undefined;
  @Input() cities!: City[];
  @Input() districts!: District[];
  @Output() onClose = new EventEmitter<boolean>();

  isLoading!: boolean;
  form!: FormGroup;
  STATUS = Status;
  destroy$ = new Subject<void>();

  constructor(
    private readonly imageUploadService: ImageUploadService,
    private readonly majlisService: MajlisService,
    private readonly modal: NgbModal,
    private readonly fb: FormBuilder,
    private readonly toastService: ToastService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.modal.open(this.contentTemp, {
        keyboard: false,
        centered: true,
        backdrop: 'static',
        size: 'lg',
      });
    }, 0);

    this.initForm();
  }

  save(): void {
    this.isLoading = true;
    const payload: Partial<Majlis> = {
      ...this.form.value,
      cityId: +this.form.get('cityId')?.value,
      districtId: +this.form.get('districtId')?.value,
    };
    const observer = this.majlis
      ? this.majlisService.updateMajlis(this.majlis.id, payload)
      : this.majlisService.addNewMajlis(payload);

    observer
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(() => {
        this.close(true);
        this.toastService.show(
          this.translateService.instant('MAJLIS_MODAL.SUCCESS'),
          { classname: 'bg-success text-light' }
        );
      });
  }

  close(isRefresh?: boolean): void {
    this.modal.dismissAll();
    this.onClose.emit(isRefresh);
  }

  changeStatus(status: Status): void {
    this.form.get('status')?.setValue(status);
  }

  uploadImage(event: any): void {
    this.imageUploadService
      .uploadFile(event?.target?.files?.[0])
      .pipe(takeUntil(this.destroy$))
      .subscribe((url) => this.form.get('image')?.setValue(url));
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      status: [Status.available, Validators.required],
      cityId: [this.cities[0]?.id, Validators.required],
      districtId: [this.districts[0]?.id, Validators.required],
      image: ['', Validators.required],
    });

    if (this.majlis) {
      this.form.patchValue(this.majlis);
      if (this.showDetails) {
        this.form.disable();
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

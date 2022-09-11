import { TranslateService } from '@ngx-translate/core';
import { Majlis, City, District } from '@app/shared/interfaces';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CitiesService,
  DistrictsService,
  MajlisService,
  ToastService,
} from '@app/shared/services';
import { Status } from '@app/shared/enums';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dewan-majlis-list',
  templateUrl: './majlis-list.component.html',
  styleUrls: ['./majlis-list.component.scss'],
})
export class MajlisListComponent implements OnInit, OnDestroy {
  majlisList$!: Observable<Majlis[]> | null;
  cities!: City[];
  districts!: District[];
  selectedMajlisToDelete!: Majlis | null;

  page: number = 1;
  pageSize: number = 4;

  getCityNameBounded!: Function;
  getDistrictNameBounded!: Function;

  selectedMajlisToEdit!: Majlis | undefined;
  isAddNew!: boolean;
  showDetails!: boolean;

  STATUS = Status;

  cityFilter: string | null = null;
  districtFilter: string | null = null;
  statusFilter: string | null = null;

  private destroy$ = new Subject<void>();
  isDeleting!: boolean;

  constructor(
    private readonly majlisService: MajlisService,
    private readonly citiesService: CitiesService,
    private readonly districtsService: DistrictsService,
    private readonly modal: NgbModal,
    private readonly toastService: ToastService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.setBoundedFunctions();
    this.loadCitiesList();
    this.loadDistrictsList();
  }

  openModal(majlis?: Majlis, details?: boolean): void {
    this.selectedMajlisToEdit = majlis;
    this.isAddNew = !majlis;
    this.showDetails = details || false;
  }

  close(isRefresh?: boolean): void {
    this.selectedMajlisToEdit = undefined;
    this.isAddNew = false;
    this.showDetails = false;

    if (isRefresh) {
      this.loadMajlisList();
    }
  }

  loadMajlisList(): void {
    this.majlisList$ = null;
    this.majlisList$ = this.majlisService.getItems();
  }

  deleteMajlis(): void {
    this.isDeleting = true;
    this.majlisService
      .deleteMajlis((this.selectedMajlisToDelete as Majlis).id)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => (this.isDeleting = false))
      )
      .subscribe(() => {
        this.selectedMajlisToDelete = null;
        this.modal.dismissAll();
        this.loadMajlisList();
        this.toastService.show(
          this.translateService.instant('LIST.DELETE_CONFIRMATION.SUCCESS'),
          { classname: 'bg-success text-light' }
        );
      });
  }

  private getCityName(cityId: number): string | undefined {
    return this.cities.find((city) => city.id === cityId)?.name;
  }

  private getDistrictName(districtId: number): string | undefined {
    return this.districts.find((district) => district.id === districtId)?.name;
  }

  private setBoundedFunctions(): void {
    this.getCityNameBounded = this.getCityName.bind(this);
    this.getDistrictNameBounded = this.getDistrictName.bind(this);
  }

  private checkAndLoadMajlis(): void {
    if (this.cities && this.districts) {
      this.loadMajlisList();
    }
  }

  private loadCitiesList(): void {
    this.citiesService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((cities) => {
        this.cities = cities;
        this.checkAndLoadMajlis();
      });
  }

  private loadDistrictsList(): void {
    this.districtsService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((districts) => {
        this.districts = districts;
        this.checkAndLoadMajlis();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

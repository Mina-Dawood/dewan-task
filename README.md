# Dewan Task
![Dewan Logo](https://github.com/Mina-Dawood/dewan-task/blob/master/src/assets/img/dewan-logo-white.png?raw=true)

### Live <a href="https://master--dewan-task.netlify.app/" target="_blank">Demo</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/8dba159a-bbec-4247-a8f8-c1fcbf07a068/deploy-status)](https://app.netlify.com/sites/dewan-task/deploys)

## How to run this app without Docker

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/Mina-Dawood/dewan-task`
3. Run `cd dewan-task`
4. Run `npm install`
5. Run `npm start`

## How to run this app with Docker

1. Open your terminal
2. Clone this repo by run this command
`git clone https://github.com/Mina-Dawood/dewan-task`
3. Run `cd dewan-task`
4. Run `npm run build:docker`
5. Run `npm run start:docker`

## Features

- Live dashboard to display majlis total number, cities' majlis pie chart and status bar chart.
- List all majlis added with pagination functionality.
- Add/Edit/View/Delete record of the majlis list.
- Allow user to filter by city, district and status in majlis list.

## Assumptions

1. `Home Page` to enter majlis list and dashboard page (Lazy Loading Module).
2. `Get Started` button in home page simulating user login.
3. `Authentication Guard` is added to prevent accessing the majlis list page or any other page unless user clicked on `Get Started`, Otherwise it should be directed to home page.
4. `JWT Interceptor` is added to intercept any request and add `Authorization & Content-Type` headers to the request.
5. `Localization` is added for English only, but the implementation is built to serve multi languages.
6. `Pagination` in majlis list.


## Technology & Libraries


- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
- `SCSS` as a pre-processor for CSS to give us new features not exists in the CSS.
- `@ngx-translate` for localizing the app.
- `Airtable` [ https://airtable.com/]( https://airtable.com/) is back-end service for CRUD operation
- `upload` [ https://upload.io/]( https://upload.io/) is back-end service for uploading images
- `netlify` for deployment.




## Backend APIs


<details>
  <summary>API for returning all majlis list</summary>

```
curl "https://api.airtable.com/v0/appbh2YNBFPRGYBJg/majlis?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer api_key"
  ```

  </details>


<details>
  <summary>API for adding new majlis record</summary>

```
curl -X POST https://api.airtable.com/v0/appbh2YNBFPRGYBJg/majlis \
  -H "Authorization: Bearer auth_token" \
  -H "Content-Type: application/json" \
  --data '{
  "records": [
    {
      "fields": {
        "id": 1,
        "image": [
          {
            "url": "https://dl.airtable.com/.attachments/a0a50e4a6faa32d3b8166ada97a010f6/a400ed57/1.jpeg"
          }
        ],
        "cityId": 1,
        "status": "Available",
        "districtId": 1,
        "name": "Abu Dhabi city majlis"
      }
    },
    {
      "fields": {
        "id": 2,
        "image": [
          {
            "url": "https://dl.airtable.com/.attachments/9afb6fd7d581cd6292dd4cbfa72c523e/27620130/2.jpeg"
          }
        ],
        "cityId": 2,
        "status": "Unavailable",
        "districtId": 2,
        "name": "Albateen majlis"
      }
    }
  ]
}'
  ```

  </details>


<details>
  <summary>API for editing existing majlis record</summary>

```
curl -X PATCH https://api.airtable.com/v0/appbh2YNBFPRGYBJg/majlis \
  -H "Authorization: Bearer auth_token" \
  -H "Content-Type: application/json" \
  --data '{
  "records": [
    {
      "id": "rec5LevDTkLrVzu2w",
      "fields": {
        "id": 1,
        "image": [
          {
            "id": "attDciHPSVA2XH58r"
          }
        ],
        "cityId": 1,
        "status": "Available",
        "districtId": 1,
        "name": "Abu Dhabi city majlis"
      }
    },
    {
      "id": "recEpyqCEFCTVzXaf",
      "fields": {
        "id": 2,
        "image": [
          {
            "id": "attqcbkVyY88V8e6v"
          }
        ],
        "cityId": 2,
        "status": "Unavailable",
        "districtId": 2,
        "name": "Albateen majlis"
      }
    },
    {
      "id": "rec0L61fzbWba55wL",
      "fields": {
        "id": 3,
        "image": [
          {
            "id": "att1kdNURk6Es9p3P"
          }
        ],
        "cityId": 3,
        "status": "Unavailable",
        "districtId": 3,
        "name": "Majlis Almushrif"
      }
    }
  ]
}'
  ```

  </details>


<details>
  <summary>API for deleting existing majlis record</summary>

```
curl -X DELETE https://api.airtable.com/v0/appbh2YNBFPRGYBJg/majlis \
  -H "Authorization: Bearer auth_token" \
  -G \
  --data-urlencode 'records[]=rec5LevDTkLrVzu2w' \
  --data-urlencode 'records[]=recEpyqCEFCTVzXaf'
  ```

  </details>


<details>
  <summary>API for returning all cities list</summary>

```
curl "https://api.airtable.com/v0/appbh2YNBFPRGYBJg/cities?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer auth_token"
  ```

  </details>


<details>
  <summary>API for returning all districts list</summary>

```
curl "https://api.airtable.com/v0/appbh2YNBFPRGYBJg/districts?maxRecords=3&view=Grid%20view" \
  -H "Authorization: Bearer auth_token"
  ```

  </details>


<details>
  <summary>API for uploading images</summary>

```
curl --data-binary @sample-image.jpg \
     -H "Content-Type: image/jpeg" \
     -H "Authorization: Bearer public_key" \
     -X POST "https://api.upload.io/v1/files/basic"
  ```

  </details>


## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/dewan-task` directory.


# Thank You



import {Component, OnInit, AfterContentInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {
  formControl = new FormControl();
  formControl2 = new FormControl();
  formControl3 = new FormControl();
  countryField = '';
  stateField = '';
  specialityField = '';
  diseaseField = '';
  changedDiseaseField = '';
  doctors: string[] = [];
  doctorsId: string[] = [];
  doctorDetailedInfo: string[] = [];


  countries: string[] = ['Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'AntiguaandBarbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'BosniaandHerzegovina',
    'Botswana',
    'Brazil',
    'BruneiDarussalam',
    'Bulgaria',
    'BurkinaFaso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'CapeVerde',
    'CaymanIslands',
    'CentralAfricanRepublic',
    'Chad',
    'Chile',
    'China',
    'ChristmasIsland',
    'Cocos(Keeling)Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'CookIslands',
    'CostaRica',
    'CoteD',
    'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'CzechRepublic',
    'DemocraticRepublicoftheCongo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'DominicanRepublic',
    'Ecuador',
    'Egypt',
    'ElSalvador',
    'EquatorialGuinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'FalklandIslands(Malvinas)',
    'FaroeIslands',
    'FederatedStatesofMicronesia',
    'Fiji',
    'Finland',
    'France',
    'FrenchGuiana',
    'FrenchPolynesia',
    'FrenchSouthernTerritories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'GreatBritain(UK)',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'HongKong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea(North)',
    'Korea(South)',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'MarshallIslands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'NetherlandsAntilles',
    'NewCaledonia',
    'NewZealand(Aotearoa)',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'NorfolkIsland',
    'NorthernMarianaIslands',
    'Norway',
    'NULL',
    'Oman',
    'Pakistan',
    'Palau',
    'PalestinianTerritory',
    'Panama',
    'PapuaNewGuinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Qatar',
    'Reunion',
    'Romania',
    'RussianFederation',
    'Rwanda',
    'S.GeorgiaandS.SandwichIslands',
    'SaintHelena',
    'SaintKittsandNevis',
    'SaintLucia',
    'SaintPierreandMiquelon',
    'SaintVincentandtheGrenadines',
    'Samoa',
    'SanMarino',
    'SaoTomeandPrincipe',
    'SaudiArabia',
    'Senegal',
    'Seychelles',
    'SierraLeone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'SolomonIslands',
    'Somalia',
    'SouthAfrica',
    'Spain',
    'SriLanka',
    'Sudan',
    'Suriname',
    'SvalbardandJanMayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'TrinidadandTobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'TurksandCaicosIslands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'UnitedArabEmirates',
    'UnitedStatesofAmerica',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'VietNam',
    'VirginIslands(British)',
    'VirginIslands(U.S.)',
    'WallisandFutuna',
    'WesternSahara',
    'Yemen',
    'Zaire(former)',
    'Zambia',
    'Zimbabwe'
  ];
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'DistrictofColumbia',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'NewHampshire',
    'NewJersey',
    'NewMexico',
    'NewYork',
    'NorthCarolina',
    'NorthDakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'RhodeIsland',
    'SouthCarolina',
    'SouthDakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'WestVirginia',
    'Wisconsin',
    'Wyoming'
  ];

  speciality: string[] = [];

  country: string[];
  filteredCountries: Observable<string[]>;
  filteredStates: Observable<string[]>;
  filteredSpeciality: Observable<string[]>;
  latitude = '';
  longitude = '';
  demo;
  person;
  con = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };

  constructor(private http: HttpClient, private router: Router) {
  }


  ngOnInit() {
    this.fetchSpeciality();

  }

  ngAfterContentInit() {
    this.filteredStates = this.formControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filterState(value))
    );

    this.filteredCountries = this.formControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCountry(value))
    );
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  private _filterState(value: string): string[] {
    const filterValues = value.toLowerCase();

    return this.states.filter(option => option.toLowerCase().indexOf(filterValues) === 0);
  }

  private _filterSpeciality(value: string): string[] {
    const filterSpeciality = value.toLowerCase();

    return this.speciality.filter(option => option.toLowerCase().indexOf(filterSpeciality) === 0);
  }

  change() {
    this.changedDiseaseField = this.diseaseField.split(' ').join('%20');
  }

  onClickMe() {
    return fetch
    ('/2016-03-01/doctors?query=' + this.changedDiseaseField + '&specialty_uid=' + this.specialityField + '&skip=0&limit=30&user_key=737c87ec63ac3e77604e2fd4524f1308')
      .then(response => response.json())
      .then(results => {
        let resultDom;
        resultDom = document.getElementById('result');
        if (results.data.length !== 0) {
          resultDom.innerHTML = '';
          results.data.forEach(function (value, key) {
            this.doctors[key] = value.profile;
            this.doctorsId[key] = value.uid;
            this.doctorDetailedInfo[key] = value;
          }.bind(this));
          console.log(this.doctors);
          console.log(this.doctorsId);
          console.log(this.doctorDetailedInfo);
        }
        else {
          resultDom.innerHTML = 'No Data Found';
        }

      });

  }

  findDocById(args) {
    this.router.navigate(['/data', {id: args}]);
  }


  fetchSpeciality() {
    return fetch
    ('/2016-03-01/specialties?skip=0&limit=20&user_key=737c87ec63ac3e77604e2fd4524f1308')
      .then(response => response.json())
      .then(results => {
        results.data.forEach(function (value, key) {
          this.speciality[key] = value.uid;
        }.bind(this));
        console.log(results);
        console.log(this.speciality);
        this.filteredSpeciality = this.formControl3.valueChanges.pipe(
          startWith(''),
          map(value => this._filterSpeciality(value))
        );
      });
  }


  findLocation(lat, long) {
    return fetch
    ('https://maps.googleapis.com/maps/api/geocode/json?latlng='
      + lat + ',' + long + '&key=AIzaSyBAtEdT0gNErE8LZpE3IV7jLWRALdQlqWE')
      .then(response => response.json())
      .then(results => {
        let result;
        console.log(results);
        result = document.getElementById('result');
        this.countryField = results.results[results.results.length - 1].address_components[0].long_name;
        this.stateField = results.results[results.results.length - 2].address_components[0].long_name;
        result.innerHTML = '';
      });
  }

  showPosition() {
    let result;
    // Store the element where the page displays the result
    result = document.getElementById('result');

    // If geolocation is available, try to get the visitor's position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successCallback.bind(this), this.errorCallback.bind(this));
      result.innerHTML = 'Getting the position information...';
    } else {
      alert('Sorry, your browser does not support HTML5 geolocation.');
    }
  }

  // Define callback function for successful attempt
  successCallback(position) {
    let result;
    let lat;
    let long;
    console.log(this);
    // Store the element where the page displays the result
    result = document.getElementById('result');
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    this.findLocation(lat, long);
  }

  // Define callback function for failed attempt
  errorCallback(error) {
    let result;
    // Store the element where the page displays the result
    result = document.getElementById('result');
    if (error.code === 1) {
      result.innerHTML = 'You\'ve decided not to share your position, but it\'s OK. We won\'t ask you again.';
    } else if (error.code === 2) {
      result.innerHTML = 'The network is down or the positioning service can\'t be reached.';
    } else if (error.code === 3) {
      result.innerHTML = 'The attempt timed out before it could get the location data.';
    } else {
      result.innerHTML = 'Geolocation failed due to unknown error.';
    }
  }

}
// Angular Modules
import { Injectable } from '@angular/core';
import { IData } from '../interfaces/i-data';

@Injectable({
	providedIn: 'root'
})
export class Constants {

	public static URL: string = 'https://matthijskamstra.github.io/werkenbijrawworks';

	public static DATA: IData = {
		hande: {
			name: 'Hande Depeli',
			role: "Recruitment Business Partner",
			company: "INTERSTELLAR"
		},
		matthijs: {
			name: 'Matthijs Kamstra',
			role: "Tribe Lead Modern Software Engineers | 🦄",
			company: "RawWorks"
		},
		rollup: {
			name: 'Rollup',
			role: "",
			company: "INTERSTELLAR"
		}
	};




	public readonly API_ENDPOINT: string = 'domain/api';
	public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';

	public static configApi: string = '/settings/application';
	public static settingsApi: string = '/settings';
	public static helpApi: string = '/help';
	public static apiUsers: string = '/users';
	public static apiUserById: string = '/user/:id/';

	public static loginURL: string = '/login';
	public static logoutURL: string = '/logout';

	public static signUpURL: string = '/signup';
	public static passwordURL: string = '/password';
}

// Angular Modules
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorage {
	public static SESSION_STORAGE_USER: string = 'werkenbijrawworks_2024_user';
	public static SESSION_STORAGE_TOKEN: string = 'werkenbijrawworks_2024_token';
	public static SESSION_STORAGE_ORGANISATION: string = 'werkenbijrawworks_2024_organisation';
}

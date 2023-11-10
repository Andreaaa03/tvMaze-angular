import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private searchQuery = new BehaviorSubject<string>('');
    currentSearchQuery = this.searchQuery.asObservable();

    updateSearchQuery(query: string) {
        this.searchQuery.next(query);
    }
}

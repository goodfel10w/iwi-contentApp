import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {News} from "../entities/news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }
}

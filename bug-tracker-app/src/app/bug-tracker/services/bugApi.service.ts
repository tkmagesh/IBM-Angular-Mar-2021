import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";

@Injectable()
export class BugApiService{
    constructor (private httpClient : HttpClient){

    }

    getAll() : Observable<Bug[]>{
        return this.httpClient
            .get<Bug[]>('http://localhost:3000/bugs')
    }

    save(bug : Bug) : Observable<Bug>{
        if (bug.id === 0){
            return this.httpClient
                .post<Bug>('http://localhost:3000/bugs', bug)
        } else {
            return this.httpClient
                .put<Bug>(`http://localhost:3000/bugs/${bug.id}`, bug)
        }
    }

    remove(bug : Bug) : Observable<any>{
        return this.httpClient
                .delete<Bug>(`http://localhost:3000/bugs/${bug.id}`)
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`https://heroku-doc-niyas.herokuapp.com/api/user`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        return this.http.post(`https://heroku-doc-niyas.herokuapp.com/api/user/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user._id, user);
        
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}
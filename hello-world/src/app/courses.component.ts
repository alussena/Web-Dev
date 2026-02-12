import {Component} from '@angular/core';

@Component({
    selector: 'courses', // <div class="courses">".courses"  <div id="courses"> "#courses"
    template: `
    <h2>{{title}}</h2>
    <ul>
            <li *ngFor="let course of courses">{{course}}
            {{course}}
            </li>
    </ul>
    `
})
export class CoursesComponent{
    title = "List of courses"
    courses = ["course1", "coruse2", "course2"];
}
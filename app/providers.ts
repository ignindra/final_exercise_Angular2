import { OpaqueToken } from '@angular/core';

export const studentInfoToken = new OpaqueToken('studentInfoToken');

export const studentInfoLists = {
  gender: ['Female', 'Male', 'Other'],
  classGrade: ['1st Grade', '2nd Grade', '3rd Grade', '4th Grade',
               '5th Grade', '6th Grade', '7th Grade', '8th Grade',
               '9th Grade', '10th Grade', '11th Grade', '12th Grade']
};
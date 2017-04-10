import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[samsAbsence]'
})
export class AbsenceDirective {
  @HostBinding('class.is-absence') isAbsence = false;
  
  @Input() set samsAbsence(value) {
    this.isAbsence = value;
  }
}
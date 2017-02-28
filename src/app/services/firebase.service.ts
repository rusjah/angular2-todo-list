import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';

@Injectable()
export class FirebaseService {

  constructor(public af: AngularFire) { }

}

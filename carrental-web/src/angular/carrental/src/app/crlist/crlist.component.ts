/**
 *    Copyright 2016 Sven Loesekann

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable,of } from 'rxjs';
import {CrRestService} from '../services/crrest.service';
import {CrTableRow} from '../dtos/crTypes';

@Component({  
  selector: 'app-crlist',
  templateUrl: './crlist.component.html',
  styleUrls: ['./crlist.component.scss'],    
})
export class CrlistComponent implements OnInit {
  tableRows: Observable<CrTableRow[]>;
  errorMsg: string;  
  modalvisible = false;
    
  constructor(private route: ActivatedRoute,private router: Router, private service: CrRestService ) {}

  ngOnInit(): void {
      let mnr = this.route.snapshot.paramMap.get('mnr');
      this.tableRows = this.service.getCrTableRows(mnr);
  }
  
  showPdf(mietNr: string) {
      window.open(`/rest/model/crTable/mietNr/${mietNr}/pdf`);
  }
  
  showModal() {
      this.modalvisible = !this.modalvisible;
  }
}

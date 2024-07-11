import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IContacts } from 'src/app/models/contacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contactsList: IContacts[] = [];
  filteredContacts: IContacts[] = [];
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchTerm: string = '';

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.allContacts();
  }

  allContacts(): void {
    this.contactsService.getContacts().subscribe({
      next: (res: IContacts[]) => {
        this.contactsList = res;
        this.filterContacts();
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error fetching contacts:', error);
      },
      complete: () => {},
    });
  }

  filterContacts(): void {
    if (this.searchTerm) {
      this.filteredContacts = this.contactsList.filter(
        (contact) =>
          (contact.firstName &&
            contact.firstName
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())) ||
          (contact.lastName &&
            contact.lastName
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase()))
      );
    } else {
      this.filteredContacts = [...this.contactsList];
    }
  }

  getContactsByLetter(letter: string): IContacts[] {
    return this.filteredContacts.filter(
      (contact) => contact.firstName && contact.firstName.startsWith(letter)
    );
  }
}

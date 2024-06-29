// app.component.ts
import { Component } from '@angular/core';
// temel direktifler ngFor,nglf vs
import { CommonModule } from '@angular/common';
// ngModel için gerekli form işlevselliği sağlar
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]  // FormsModule burada ekleniyor
})
export class AppComponent {
  title = 'Palindrome Checker';
  userInput = '';
  palindromeData = [
    { text: "racecar", isPurePalindrome: true, isPalindrome: true },
    { text: "A man, a plan, a canal: Panama", isPurePalindrome: false, isPalindrome: true },
    { text: "test", isPurePalindrome: false, isPalindrome: false }
  ];

  // check is palindrome or not
  addPalindrome() {
    const cleanedText = this.userInput.replace(/[\W_]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    // cleanedText is compared with reversedText
    const isPalindrome = cleanedText === reversedText;
    // The original text is reversed and compared with the original.
    const isPurePalindrome = this.userInput === this.userInput.split('').reverse().join('');

    this.palindromeData.push({
      text: this.userInput,
      isPurePalindrome: isPurePalindrome,
      isPalindrome: isPalindrome
    });

    this.userInput = ''; // Input alanını temizle
  }
}

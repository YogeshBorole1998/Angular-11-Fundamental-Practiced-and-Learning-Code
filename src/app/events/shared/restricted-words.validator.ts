import { FormControl } from '@angular/forms';

export function restrictedWords(words: any[]) {
  return (control: FormControl): { [key: string]: any } | null => {
    if (!words) return null; // If control is empty, no error

    var invalidWords = words
      .map((w: any) => (control.value.includes(w) ? w : null))
      .filter((w: null) => w != null);

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}

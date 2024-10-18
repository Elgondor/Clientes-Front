import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatPhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('should format phone numbers correctly', () => {
    const pipe = new FormatPhonePipe();
    const rawPhone = '+56912345674';
    const formattedPhone = pipe.transform(rawPhone);
    expect(formattedPhone).toBe('+569 1234 5674');
  });
});

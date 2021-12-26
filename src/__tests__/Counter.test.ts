import Counter from '../pages/Counter.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Counter', () => {

  test('should display initial value', () => {
    const { getByText } = render(Counter);
    expect(getByText('Counter = 0')).toBeTruthy();
  });

  test('should display correct value after increment', async () => {
    const { getByText } = render(Counter);
    const button = getByText('+');

    await fireEvent.click(button);

    expect(getByText('Counter = 1')).toBeTruthy();
  });

});

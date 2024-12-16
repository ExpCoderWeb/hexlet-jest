import reverse from '../src/index.js';


test('pop in empty stack', () => {
  const stack = [];
  // Вызов метода pop обернут в функцию
  // Иначе матчер не сможет перехватить исключение
  expect(() => stack.pop()).toThrow();
});

test ('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});


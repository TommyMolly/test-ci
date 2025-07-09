import getHealthStatus from '../health';

test('returns "healthy" for health > 50', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('returns "wounded" for health between 15 and 50', () => {
  expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Воин', health: 15 })).toBe('wounded');
});

test('returns "critical" for health < 15', () => {
  expect(getHealthStatus({ name: 'Разведчик', health: 10 })).toBe('critical');
});

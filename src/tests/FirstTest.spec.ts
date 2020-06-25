import { User } from '@models/User';

it('it should be ok', () => {
    const user = new User();
    user.name = 'Helio';

    expect(user.name).toEqual('Helio');
});
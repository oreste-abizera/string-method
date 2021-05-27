import { reverse } from '../src/index';

describe('reverse', () => {
  it('reverses a string', () => {
    expect(reverse('str║ing')).toEqual('gni║rts');
  });

  it('reverses a complex string', () => {
    expect(reverse('s_t_r_i_n_g', '_')).toEqual('g_n_i_r_t_s');
  });
});

import PnpmError from '@pnpm/error'
import { PnpmOptions } from '../../types'
import help from '../help'
import start from './start'
import status from './status'
import stop from './stop'

export default async (
  input: string[],
  opts: PnpmOptions & {
    protocol?: 'auto' | 'tcp' | 'ipc',
    port?: number,
    unstoppable?: boolean,
  },
) => {
  switch (input[0]) {
    case 'start':
      return start(opts)
    case 'status':
      return status(opts)
    case 'stop':
      return stop(opts)
    default:
      help(['server'])
      if (input[0]) {
        throw new PnpmError('INVALID_SERVER_COMMAND', `"server ${input[0]}" is not a pnpm command. See "pnpm help server".`)
      }
  }
}

import { Optional } from '../../typings/standard-types'
import { ProfileOptions } from '../../typings/domain-types'

import { hasProperty } from './validators'

import { CONFIG } from '../configs/configs'

export const getProfileByEnv = (env: Optional<string> = process.env.NODE_ENV): ProfileOptions => {
    return env && hasProperty(CONFIG, env) ? CONFIG[env] : CONFIG.dev
}

export const profile = getProfileByEnv()

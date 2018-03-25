import Authenticator from '@/lib/Authenticator'

const auth = new Authenticator()

const state = {}

const actions = {
  login () {
    auth.login()
  }
}

export default {
  state,
  actions
}

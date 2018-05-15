import { Button } from 'app/ui/Button'
import { IState } from 'lib/store/state'
import { ICreateUserDTO } from 'lib/user'
import { isSavingUserForm } from 'lib/user/selectors'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { UserAction } from '../../lib/user/actions'

interface IUserFormStateProps {
  readonly isSaving: boolean
}

const UserFormComponent: React.SFC<InjectedFormProps & IUserFormStateProps> = ({ handleSubmit, isSaving }) => (
  <>
    <form onSubmit={handleSubmit}>
      <Field name='firstName' component='input' />
      <Field name='lastName' component='input' />
      <Button type='submit' disabled={isSaving} text='Send' />
    </form>
    {isSaving}
  </>
)

const Form = reduxForm({ form: 'user' })(UserFormComponent)

const mapStateToProps = (state: IState): IUserFormStateProps => ({
  isSaving: isSavingUserForm(state),
})

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  onSubmit: (user: ICreateUserDTO) => { dispatch(UserAction.createUser(user)) },
})

export const UserForm = connect(mapStateToProps, mapDispatchToProps)(Form)

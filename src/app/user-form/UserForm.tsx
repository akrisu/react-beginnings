import { Button } from 'app/ui/Button'
import { IState } from 'lib/store/state'
import { ICreateUserDTO } from 'lib/user'
import { isSavingUserForm } from 'lib/user/selectors'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import { minLength, required, Validator } from '../../common/form/validators/validators'
import { UserAction } from '../../lib/user/actions'

interface IUserFormStateProps {
  readonly isSaving: boolean
}

class UserFormComponent extends React.Component<InjectedFormProps & IUserFormStateProps> {
  private readonly validators: Validator[] = [required, minLength(3)] // tslint:disable-line no-magic-numbers

  public render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <Field name='firstName' component='input' validate={this.validators} />
          <Field name='lastName' component='input' validate={this.validators} />
          <Button type='submit' disabled={this.props.isSaving} text='Send' />
        </form>
        {this.props.isSaving}
      </>
    )
  }
}

const Form = reduxForm({ form: 'user '})(UserFormComponent)

const mapStateToProps = (state: IState): IUserFormStateProps => ({
  isSaving: isSavingUserForm(state),
})

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  onSubmit: (user: ICreateUserDTO) => { dispatch(UserAction.createUser(user)) },
})

export const UserForm = connect(mapStateToProps, mapDispatchToProps)(Form)

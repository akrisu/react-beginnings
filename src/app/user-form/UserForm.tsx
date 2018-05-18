import { Button } from 'app/ui'
import { minLength, required, Validator } from 'common/form'
import { FormID } from 'lib/form'
import { IState } from 'lib/store'
import { ICreateUserDTO, isSavingUserForm, UserAction } from 'lib/user'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

interface IUserFormStateProps {
  readonly isSaving: boolean
}

class UserFormComponent extends React.Component<InjectedFormProps & IUserFormStateProps> {
  private readonly validators: Validator[] = [required, minLength(3)] // tslint:disable-line no-magic-numbers

  public render(): React.ReactNode {
    const { isSaving, handleSubmit } = this.props

    return (
      <>
        <form onSubmit={handleSubmit}>
          <Field name='firstName' component='input' validate={this.validators} />
          <Field name='lastName' component='input' validate={this.validators} />
          <Button type='submit' disabled={isSaving} text='Send' />
        </form>
        {isSaving}
      </>
    )
  }
}

const Form = reduxForm({ form: FormID.UserForm })(UserFormComponent)

const mapStateToProps = (state: IState): IUserFormStateProps => ({
  isSaving: isSavingUserForm(state),
})

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
  onSubmit: (user: ICreateUserDTO) => { dispatch(UserAction.createUser(user)) },
})

export const UserForm = connect(mapStateToProps, mapDispatchToProps)(Form)

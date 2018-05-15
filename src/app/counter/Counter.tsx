import { Button } from 'app/ui/Button'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { CounterAction } from 'lib/counter/actions'
import { IState } from 'lib/store/state'

interface ICounterComponentProps {
  readonly initialValue?: number
}
interface ICounterStateProps {
  readonly value: number
}
interface ICounterDispatchProps {
  readonly decrement: () => void
  readonly increment: () => void
}
type ICounterProps = ICounterComponentProps & ICounterStateProps & ICounterDispatchProps

const CounterComponent: React.SFC<ICounterProps> = ({ value, increment, decrement }) => (
  <div>
    <Button onClick={decrement} text='decrement' />
    {value}
    <Button onClick={increment} text='increment' />
  </div>
)

const getCounterValue = (state: IState): number => state.counter

const mapStateToProps = (state: IState): ICounterStateProps => ({
  value: getCounterValue(state),
})
const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): ICounterDispatchProps => ({
  decrement: () => { dispatch(CounterAction.decrement()) },
  increment: () => { dispatch(CounterAction.increment()) },
})

export const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)

/*
  // RESELECT
  account: { personal: { name: string } }

  const getAccountFeature = state => state.account
  const getPersonalInfo = selector(getAccountFeature, account => account.personal)
  const getUserName = selector(getPersonalInfo, personal => personal.name)
*/

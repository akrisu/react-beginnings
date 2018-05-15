import { selectActionsInProgressNumber } from 'lib/action-progress/selectors'
import { IState } from 'lib/store/state'
import * as React from 'react'
import { connect } from 'react-redux'

interface IActionProgressStateProps {
  readonly actionsInProgress: number
}

const ActionProgressComponent: React.SFC<IActionProgressStateProps> = ({ actionsInProgress }) => (
  <div>{actionsInProgress}</div>
)

const mapStateToProps = (state: IState): IActionProgressStateProps => ({
  actionsInProgress: selectActionsInProgressNumber(state),
})

export const ActionProgress = connect(mapStateToProps)(ActionProgressComponent)

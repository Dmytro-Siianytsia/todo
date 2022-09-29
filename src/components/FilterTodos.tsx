import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import storeTodos, { filter } from '../stores/Todos'
import { FilterButton } from './styles/FilterButton'

interface IFilterButton {
    label: string,
    value: filter,
    active: boolean
}

const FilterTodos: React.FC = observer(() => {
    const [buttons, setButtons] = useState<IFilterButton[]>([
        {label: 'All', value: 'all', active: true},
        {label: 'Completed', value: 'completed', active: false},
        {label: 'Active', value: 'active', active: false},
    ])

    const handleClick = (btn: IFilterButton) => {
        const changedActiveButton = buttons.map(
            button => button.value === btn.value ? {...button, active: true }: {...button, active: false}
        )

        storeTodos.setFilterTodos(btn.value)
        setButtons(changedActiveButton)
    }

    return(
        <div>
            {buttons.map(button =>
                <FilterButton active={button.active} onClick={() => handleClick(button)} key={button.value}>
                    {button.label}
                </FilterButton>
            )}
        </div>
    )
})

export default FilterTodos

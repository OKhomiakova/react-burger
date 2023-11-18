import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';

function Constructor({data, type}) {
  const isTopOrBottom = type === 'top' || type === 'bottom';
  const showDragIcon = !isTopOrBottom;
    return (
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', paddingLeft: isTopOrBottom ? '32px' : '0'}}>
          {showDragIcon && (
            <div className='icon'>
              <DragIcon />
            </div>
          )}
          <ConstructorElement
            type={type}
            isLocked={false}
            text={data.name}
            price={data.price}
            thumbnail={data.image}
          />
        </div>
      )
}

export default Constructor;
import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {ScreenModal} from '../../../../components/ScreenModal/ScreenModal';
import {onCloseModal} from './SortCities.controller';
import {Pages} from './Pages/Pages';

interface IProps {}

export const SortCities: FC<IProps> = React.memo(({}) => {
  const showModal = useSelector(
    (state: IRootState) => state.main.modals.sortCitiesModal.showModal,
    shallowEqual,
  );

  return (
    <>
      {showModal ? (
        <ScreenModal
          visible={true}
          onCloseModal={onCloseModal}
          animationType={'none'}>
          <Pages />
        </ScreenModal>
      ) : null}
    </>
  );
});

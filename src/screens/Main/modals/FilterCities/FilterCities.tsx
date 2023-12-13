import React, {FC} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import {IRootState} from '../../../../store/reducers/combineReducer.reducer';
import {ScreenModal} from '../../../../components/ScreenModal/ScreenModal';
import {onCloseModal} from './FilterCities.controller';
import {SearchInput} from './SearchInput/SearchInput';
import {StyleSheet, View} from 'react-native';
import {CloseButton} from './CloseButton/CloseButton';
import {FilterButtons} from './FilterButtons/FilterButtons';
import {FiltersPage} from './FiltersPage/FiltersPage';

interface IProps {}

export const FilterCities: FC<IProps> = React.memo(({}) => {
  const showModal = useSelector(
    (state: IRootState) => state.main.modals.filterCitiesModal.showModal,
    shallowEqual,
  );

  return (
    <>
      {showModal ? (
        <ScreenModal
          onCloseModal={onCloseModal}
          animationType={'none'}
          visible={true}>
          <View style={styles.navContainer}>
            <CloseButton />
            <SearchInput />
          </View>
          <FilterButtons />
          <FiltersPage />
        </ScreenModal>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
});

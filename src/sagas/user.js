import { take, select, all, put } from 'redux-saga/effects';
import { selectCurrentAccount, changePassword, accountProfileUpdate } from '../reducers/Account';
import {
  FORM_SUBMIT_START, selectForm, resetForm, formSubmitFail, formSubmitSuccess,
  PASSWORD_CHANGE_FORM, EDIT_PROFILE_FORM
} from '../reducers/form';

export function* editProfileSaga() {
  while (1) {
    const action = yield take(FORM_SUBMIT_START);
    const formName = action.payload;
    if (formName !== EDIT_PROFILE_FORM) {
      return;
    }
    const form = yield select(selectForm, formName);
    yield put(formSubmitSuccess());
    yield put(accountProfileUpdate(form.data));
    yield put(resetForm(formName));
  }
}

export function* passwordChangeSaga() {
  while (1) {
    const action = yield take(FORM_SUBMIT_START);
    const formName = action.payload;
    if (formName !== PASSWORD_CHANGE_FORM) {
      return;
    }
    const form = yield select(selectForm, formName);
    const { oldPassword, newPassword, confirmPassword } = form.data;
    const account = yield select(selectCurrentAccount);
    if (newPassword !== confirmPassword) {
      yield put(formSubmitFail(formName, 'Confirm password not match'));
      continue;
    }
    if (account.password === oldPassword) {
      yield put(formSubmitSuccess());
      yield put(changePassword(account.username, newPassword));
      yield put(resetForm(formName));
    } else {
      yield put(formSubmitFail(formName, 'Old password not match'));
    }
  }
}

export default function* userRootSaga() {
  yield all([
    passwordChangeSaga(),
    editProfileSaga(),
  ])
}

// import redux method
import { combineReducers } from '@reduxjs/toolkit';
// import all reducers
import { authReducer, signInReducer, storeEmailReducer, storePasswordReducer } from './auth.reducers';
import {
  changeSignUpStep,
  setAccountType,
  storeCompanyCode,
  storeFirstName,
  storeLastName,
  storeEmail,
  storePassword,
  storeRole,
  storeEmployeeAccount,
  storeCompany,
  storeCompanyName,
  storeCompanySize,
  storeAdminAccount,
  storeInvitedEmployee,
  storeInvitedEmployees,
} from './signUpSteps.reducers';
import {
  storeTaskOneReducer,
  storeTaskTwoReducer,
  storeTaskThreeReducer,
  storeTaskFourReducer,
  storeTaskFiveReducer,
} from './tasks.reducers';
import {
  deleteUserReducer,
  userReducer,
  storeUserBuddyReducer,
  storeUserDepartmentReducer,
  storeUserEmailReducer,
  storeUserRoleReducer,
  toggleDeleteUserModalReducer,
  toggleEditUserModalReducer,
  toggleAddUserModalReducer,
} from './forms/users.reducers';
import { toggleAddAchievementModalReducer, toggleEditAchievementModalReducer, toggleDeleteAchievementModalReducer, storeAchievementTitleReducer, storeAchievementDescriptionReducer, storeAchievementDateReducer, achievementReducer, deleteAchievementReducer } from './forms/achievements.reducers';
import { toggleAddFaqModalReducer, toggleEditFaqModalReducer, toggleDeleteFaqModalReducer, storeFaqQuestionReducer, storeFaqAnswerReducer, faqReducer, deleteFaqReducer } from './forms/faqs.reducers';
import { storeRoleTitleReducer, storeRoleDescriptionReducer, storeRoleResponsibilityReducer, storeRoleResponsibilitiesReducer, roleReducer, deleteRoleReducer, toggleAddRoleModalReducer, toggleDeleteRoleModalReducer, toggleEditRoleModalReducer } from './forms/roles.reducers';
import { toggleAddCategoryModalReducer, toggleEditCategoryModalReducer, toggleDeleteCategoryModalReducer, deleteCategoryReducer, categoryReducer } from './forms/categories.reducers';
import { toggleAddDepartmentModalReducer, toggleEditDepartmentModalReducer, toggleDeleteDepartmentModalReducer, deleteDepartmentReducer, departmentReducer } from './forms/departments.reducers';

// combine reducers
// set to 'any' as it can't be set to 'void'
const reducers: any = combineReducers({
  // Auth
  auth: authReducer,
  // Sign in
  signIn: signInReducer,
  signInEmail: storeEmailReducer,
  signInPassword: storePasswordReducer,
  // Sign up
  signUpInfo: changeSignUpStep,
  signUpAccountType: setAccountType,
  signUpCompanyCode: storeCompanyCode,
  signUpFirstName: storeFirstName,
  signUpLastName: storeLastName,
  signUpEmail: storeEmail,
  signUpPassword: storePassword,
  signUpRole: storeRole,
  signUpEmployeeInfo: storeEmployeeAccount,
  signUpCompanyInfo: storeCompany,
  signUpCompanyName: storeCompanyName,
  signUpCompanySize: storeCompanySize,
  signUpAdminInfo: storeAdminAccount,
  signUpLastInvitedEmployee: storeInvitedEmployee,
  signUpLastInvitedEmployees: storeInvitedEmployees,
  // Modals
  addUserModal: toggleAddUserModalReducer,
  editUserModal: toggleEditUserModalReducer,
  deleteUserModal: toggleDeleteUserModalReducer,
  addAchievementModal: toggleAddAchievementModalReducer,
  editAchievementModal: toggleEditAchievementModalReducer,
  deleteAchievementModal: toggleDeleteAchievementModalReducer,
  addFaqModal: toggleAddFaqModalReducer,
  editFaqModal: toggleEditFaqModalReducer,
  deleteFaqModal: toggleDeleteFaqModalReducer,
  addRoleModal: toggleAddRoleModalReducer,
  editRoleModal: toggleEditRoleModalReducer,
  deleteRoleModal: toggleDeleteRoleModalReducer,
  addCategoryModal: toggleAddCategoryModalReducer,
  editCategoryModal: toggleEditCategoryModalReducer,
  deleteCategoryModal: toggleDeleteCategoryModalReducer,
  addDepartmentModal: toggleAddDepartmentModalReducer,
  editDepartmentModal: toggleEditDepartmentModalReducer,
  deleteDepartmentModal: toggleDeleteDepartmentModalReducer,
  // Tasks
  taskOne: storeTaskOneReducer,
  taskTwo: storeTaskTwoReducer,
  taskThree: storeTaskThreeReducer,
  taskFour: storeTaskFourReducer,
  taskFive: storeTaskFiveReducer,
  // Users
  userEmail: storeUserEmailReducer,
  userBuddy: storeUserBuddyReducer,
  userDepartment: storeUserDepartmentReducer,
  userRole: storeUserRoleReducer,
  editUser: userReducer,
  deleteUser: deleteUserReducer,
  // Achievements
  achievementTitle: storeAchievementTitleReducer,
  achievementDescription: storeAchievementDescriptionReducer,
  achievementDate: storeAchievementDateReducer,
  achievement: achievementReducer,
  deleteAchievement: deleteAchievementReducer,
  // FAQs
  faqQuestion: storeFaqQuestionReducer,
  faqAnswer: storeFaqAnswerReducer,
  faq: faqReducer,
  deleteFaq: deleteFaqReducer,
  // Roles
  roleTitle: storeRoleTitleReducer,
  roleDescription: storeRoleDescriptionReducer,
  roleResponsibility: storeRoleResponsibilityReducer,
  roleResponsibilities: storeRoleResponsibilitiesReducer,
  role: roleReducer,
  deleteRole: deleteRoleReducer,
  // Categories
  category: categoryReducer,
  deleteCategory: deleteCategoryReducer,
  // Departments
  department: departmentReducer,
  deleteDepartment: deleteDepartmentReducer,
  // ...
});

export default reducers;

import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { ToggleEditUserModalAction } from '../../../../store/actions/forms/forms.actions';
import {
  StoreBuddyAction,
  StoreDepartmentAction,
  StoreRoleAction,
  StoreUserAction,
} from '../../../../store/actions/forms/users/users.actions';
import {
  IUser,
  IEditUserModal,
  IUserBuddy,
  IUserDepartment,
  IUserRole,
} from '../../../../store/interfaces/forms/users.interfaces';
import { checkFormFields, ICheckFields } from '../../../../utils/checkFormFields';
import { validator, validatorTypes } from '../../../../utils/formValidation';

import Form from '../../../common/Form/Form';
import { IField } from '../../../../store/interfaces/forms.interfaces';
import { getTokenFromLocalStorage } from '../../../../utils/localStorageActions';
import { IDepartmentTable } from '../../../../../../types/department.types';

interface EditUsersFormProps {
  user: IUser;
  userBuddy: IUserBuddy;
  userDepartment: IUserDepartment;
  userRole: IUserRole;
  editUserModal: IEditUserModal;
  storeUserBuddy: (userBuddy: IUserBuddy) => any;
  storeUserDepartment: (userDepartment: IUserDepartment) => any;
  storeUserRole: (userRole: IUserRole) => any;
  storeUser: (user: IUser) => any;
  toggleEditUserModal: (userModal: IEditUserModal) => any;
}

interface EditUsersFormState {
  areFieldsValid: ICheckFields;
  userId: number;
}

interface CompanyDepartmentsState extends EditUsersFormState {
  companyDepartments: IDepartmentTable[];
}

class EditUsersForm extends React.Component<EditUsersFormProps, CompanyDepartmentsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      areFieldsValid: {
        areAllFieldsValid: false,
      },
      userId: this.props.editUserModal.id,
      companyDepartments: [],
    };
  }

  // Actions
  closeEditUserModal = (e: MouseEvent | FormEvent) => {
    e.preventDefault();

    this.props.toggleEditUserModal({ id: 0, isOpen: false });
  };

  // Check that all fields are valid and enable confirm button
  checkFields = (): any => {
    const formValues: string[] = ['userBuddy', 'userDepartment', 'userRole'];
    const areFieldsValid: ICheckFields = checkFormFields(formValues);

    this.setState({ areFieldsValid: areFieldsValid });
  };

  // On change events
  storeBuddy = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserBuddy({ buddy: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeDepartment = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserDepartment({ department: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };
  storeRole = (data: number): any => {
    const { isValid, message } = validator(data, validatorTypes.REQUIRED);

    this.props.storeUserRole({ role: data, isValid: isValid, errorMessage: message });

    this.checkFields();

    return { isValid, message };
  };

  // Form events
  saveUserToRedux = (): void => {
    this.props.storeUser({
      buddy: this.props.userBuddy,
      department: this.props.userDepartment,
      role: this.props.userRole,
    });
  };

  saveUserToDB = (): void => {
    // TODO: add axios call here - use this.state.userId and this.props.user
    // the last one is an object containing these objects: buddy, department, role
  };

  editUser = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    await this.saveUserToRedux();
    await this.saveUserToDB();

    this.closeEditUserModal(event);
  };

  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getDepartments = async () => {
    return await axios.get('/api/department/table', this.config).then(res => {
      return res.data;
    });
  };

  getRoles = async () => {
    return await axios.get('/api/role/table', this.config).then(res => {
      return res.data;
    });
  };

  getBuddies = async () => {
    return await axios.get('/api/company/buddy-table', this.config).then(res => {
      return res.data;
    });
  };

  // Fields
  userModalFields: IField[] = [];

  async componentDidMount() {
    const departments = await this.getDepartments();
    const roles = await this.getRoles();
    const buddies = await this.getBuddies();

    this.userModalFields.push(
      { name: 'Assigned to (buddy)', type: 'select', onchange: this.storeBuddy, options: { list: buddies } },
      {
        name: 'Department',
        type: 'select',
        onchange: this.storeDepartment,
        options: {
          list: departments,
        },
      },
      { name: 'Role', type: 'select', onchange: this.storeRole, options: { list: roles } }
    );
  }

  render() {
    return (
      <Form
        fields={this.userModalFields || []}
        header={'Edit a user'}
        submitFunction={this.editUser}
        closeFunction={this.closeEditUserModal}
        areFieldsValid={this.state.areFieldsValid.areAllFieldsValid}
        isModalOpen={this.props.editUserModal.isOpen}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    userBuddy: state.userBuddy,
    userDepartment: state.userDepartment,
    userRole: state.userRole,
    editUserModal: state.editUserModal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    storeUserBuddy: (userBuddy: IUserBuddy) => dispatch(StoreBuddyAction(userBuddy)),
    storeUserDepartment: (userDepartment: IUserDepartment) => dispatch(StoreDepartmentAction(userDepartment)),
    storeUserRole: (userRole: IUserRole) => dispatch(StoreRoleAction(userRole)),
    storeUser: (user: IUser) => dispatch(StoreUserAction(user)),
    toggleEditUserModal: (userModal: IEditUserModal) => dispatch(ToggleEditUserModalAction(userModal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsersForm);

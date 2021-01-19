import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import DocumentsAccordion from '../../components/Documents/DocumentsAccordion/DocumentsAccordion';
import Actions from '../../components/common/Actions/Actions';
import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';
import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';

interface DocumentsProps {
  editProfileModal: IEditProfileModal;
}

class Documents extends React.Component<DocumentsProps> {
  sections = [{ name: 'Files', pathname: 'documents' }];

  // TODO: Replace this with categories from the DB
  categories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Engineering' },
    { id: 3, title: 'Design' },
  ];

  // TODO: Replace this with documents' data from the DB
  data = [
    {
      id: 1,
      filename: 'PDF',
      created: '10-03-19',
    },
    {
      id: 2,
      filename: 'PNG',
      created: '09-06-20',
    },
  ];

  content = [
    {
      category: this.categories[2],
      data: this.data,
    },
  ];

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[1];

    return (
      <div className="app__container">
        <Menu activeSection={'documents'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'Documents'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            <Categories categories={this.categories} />

            <div id="documents__content">
              <DocumentsAccordion content={this.content} />
            </div>
          </div>
        </div>

        <ProfileForm isModalOpen={this.props.editProfileModal.isOpen} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    editProfileModal: state.editProfileModal,
  };
};

export default connect(mapStateToProps)(Documents);

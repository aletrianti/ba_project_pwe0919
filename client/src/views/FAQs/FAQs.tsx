import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import HorizontalAccordion from '../../components/common/HorizontalAccordion/HorizontalAccordion';
import { IQuestion } from '../../store/interfaces/questions.interfaces';
import { getTokenFromLocalStorage } from '../../utils/localStorageActions';
import axios from 'axios';
import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';
import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';

interface FaqState {
  faqs: IQuestion[];
}

interface FaqProps {
  editProfileModal: IEditProfileModal;
}

class FAQs extends React.Component<FaqProps, FaqState> {
  constructor(props: any) {
    super(props);

    this.state = {
      faqs: [],
    };
  }
  config = {
    headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
  };

  getFaqs = async () => {
    return await axios.get('/api/faq', this.config).then(res => {
      return res.data;
    });
  };

  async componentDidMount() {
    const faqs = await this.getFaqs();

    this.setState({ faqs: faqs });
  }

  sections = [{ name: 'FAQs', pathname: 'faqs' }];

  // TODO: Replace this with categories from the DB

  categories = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Engineering' },
    { id: 3, title: 'Design' },
  ];

  openAddFAQModal = (): void => {};

  render() {
    const pathname = window.location.pathname.split('/');
    const sectionName = pathname[1];

    return (
      <div className="app__container">
        <Menu activeSection={'faqs'} />

        <div className="app__container__topbar-and-content">
          <TopBar sectionName={'FAQs'} />

          <div className="app__content">
            <SectionBar sections={this.sections} activeSection={sectionName} />

            <Categories categories={this.categories} />

            {sectionName === 'faqs' ? <HorizontalAccordion questions={this.state.faqs} section={sectionName} /> : null}
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

export default connect(mapStateToProps)(FAQs);

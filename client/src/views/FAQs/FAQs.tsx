import React from 'react';
import Menu from '../../components/common/Menu/Menu';
import TopBar from '../../components/common/TopBar/TopBar';
import SectionBar from '../../components/common/SectionBar/SectionBar';
import Categories from '../../components/common/Categories/Categories';
import HorizontalAccordion from '../../components/common/HorizontalAccordion/HorizontalAccordion';
import { IQuestion } from '../../store/interfaces/questions.interfaces';
import { connect } from 'react-redux';
import { IEditProfileModal } from '../../store/interfaces/forms/profile.interfaces';
import ProfileForm from '../../components/common/TopBar/Profile/ProfileForm/ProfileForm';
import { getCategories, getFAQs } from '../../utils/httpRequests';
import { ITableCategory } from '../../store/interfaces/tables.interfaces';

interface FaqState {
  faqs: IQuestion[];
  categories: ITableCategory[];
}

interface FaqProps {
  editProfileModal: IEditProfileModal;
}

class FAQs extends React.Component<FaqProps, FaqState> {
  constructor(props: any) {
    super(props);

    this.state = {
      faqs: [],
      categories: [],
    };
  }

  getFaqs = async () => {
    return await getFAQs();
  };

  getCategories = async () => {
    return await getCategories();
  };
  async componentDidMount() {
    const faqs = await this.getFaqs();
    const categories = await this.getCategories();
    if (categories) categories.unshift({ id: 0, title: 'All' });

    this.setState({ faqs: faqs });
    this.setState({ categories: categories });
  }

  sections = [{ name: 'FAQs', pathname: 'faqs' }];

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

            <Categories categories={this.state.categories} />

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

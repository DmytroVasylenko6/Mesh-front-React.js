import React, { useState, useEffect } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Button, Row, Col, Grid, Select } from 'antd';
import Avatar from '../Avatar';
import { useLocation } from 'react-router';
import paths from '../../utils/paths';
import MeshSelect from '../common/MeshSelect/MeshSelect';
// import registerSchema from '../../utils/validation-schemas/RegisterSchema';
const { useBreakpoint } = Grid;
const { Option } = Select;

const { TextArea } = Input;

export default function RegistrationForm({ handleSubmit }) {
  let location = useLocation();
  const [isEdit, setIsEdit] = useState();
  const [isBusinessPage, setIsBusinessPage] = useState();
  const screens = useBreakpoint();
  const avatarPlaceholder = isBusinessPage ? "Upload Avatar" : "Upload Avatar / Pic";

  useEffect(() => {
    if (location.pathname.indexOf(paths.businessProfileSettings) !== -1) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
    if (location.pathname.indexOf(paths.businessProfile) !== -1) {
      setIsBusinessPage(true);
    } else {
      setIsBusinessPage(false);
    }
  }, [location]);
  console.log(isBusinessPage);
  return (
    <Formik
      initialValues={
        isBusinessPage
          ? {
              name: '',
              industry: '',
              company: '',
              email: '',
              phone: '',
              country: '',
              password: '',
              city: '',
              aboutText: '',
              website: '',
              linkedin: '',
              facebook: '',
              instagram: '',
              URL: '',
            }
          : {
              name: '',
              expertise: '',
              company: '',
              email: '',
              phone: '',
              country: '',
              password: '',
              city: '',
              aboutText: '',
              website: '',
              linkedin: '',
              facebook: '',
              instagram: '',
              URL: '',
            }
      }
      //   validationSchema={registerSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, handleBlur, errors, touched, values }) => (
        <Form className="profile-form">
          <Row gutter={[50, 20]}>
            <Col span={24}>
              <h2 className="profile-form__description">Profile</h2>
            </Col>

            <Col span={24} lg={{ span: 8 }}>
              <Row gutter={[50, 20]}>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      data-error={errors.name && touched.name ? true : false}
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="name" />
                    </span>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="text"
                      name="company"
                      id="company"
                      data-error={
                        errors.company && touched.company ? true : false
                      }
                      placeholder="Company"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="company" />
                    </span>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      data-error={errors.phone && touched.phone ? true : false}
                      placeholder="Phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="phone" />
                    </span>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      data-error={errors.email && touched.email ? true : false}
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                </Col>
                
              </Row>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <Row gutter={[50, 20]}>
                <Col span={24}>
                  {isBusinessPage ? (
                    <div className="profile-form__item">
                      {/* <Input
                        type="text"
                        name="industry"
                        id="industry"
                        data-error={
                          errors.industry && touched.industry
                            ? true
                            : false
                        }
                        placeholder="Industry"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="profile-form__input"
                        readOnly={!isEdit}
                      /> */}
                      <Select 
                        className="profile-form__input"
                        placeholder="Industry" 
                        data-error={errors.industry && touched.industry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        // disabled={!isEdit}
                        >
                        <Option value="Health care">Health care</Option>
                        <Option value="Finance">Finance</Option>
                        <Option value="Legal">Legal</Option>
                      </Select>
                      <span className="profile-form__error">
                        <ErrorMessage name="industry" />
                      </span>
                    </div>
                  ) : (
                    <div className="profile-form__item">
                      {/* <Input
                        type="text"
                        name="specialty"
                        id="specialty"
                        data-error={
                          errors.specialty && touched.specialty ? true : false
                        }
                        placeholder="Specialty"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="profile-form__input"
                        readOnly={!isEdit}
                      /> */}
                      <MeshSelect
                        placeholder="Expertise"
                        defaultValue="Marketing"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="profile-form__input"
                      > 
                        <Option value="Marketing">Marketing</Option>
                        <Option value="Business support">Business support</Option>
                        <Option value="Other">Other</Option>
                      </MeshSelect>
                      <span className="profile-form__error">
                        <ErrorMessage name="expertise" />
                      </span>
                    </div>
                  )}
                </Col>
                <Col span={24}>
                  <div className="profile-form__item">
                    <MeshSelect
                      name="country"
                      defaultValue="Country 1"
                      placeholder="Country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-error={
                        errors.country && touched.country ? true : false
                      }
                      disabled={!isEdit}>
                      <Option value="Country 1">Country 1</Option>
                      <Option value="Country 2">Country 2</Option>
                      <Option value="Country 3">Country 3</Option>
                    </MeshSelect>
                    <span className="profile-form__error">
                      <ErrorMessage name="country" />
                    </span>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="profile-form__item">
                    <MeshSelect
                      name="city"
                      defaultValue="City 1"
                      placeholder="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      data-error={errors.city && touched.city}>
                      <Option value="City 1">City 1</Option>
                      <Option value="City 2">City 2</Option>
                      <Option value="City 3">City 3</Option>
                    </MeshSelect>
                    <span className="profile-form__error">
                      <ErrorMessage name="city" />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <Row gutter={[50, 20]}>
                
                <Col span={24}>
                  <div className="profile-form__item">
                    <TextArea
                      name="aboutText"
                      id="aboutText"
                      // data-error={errors.aboutText && touched.aboutText ? true : false}
                      placeholder="250 words about yourself"
                      className="profile-form__input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoSize={{ minRows: 5 }}
                      style={{ padding: '11px' }}
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="aboutText" />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <h2 className="profile-form__description">Member's links</h2>
            </Col>

            <Col span={24} lg={{ span: 8 }}>
              <Row gutter={[50, 20]}>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="url"
                      name="website"
                      id="website"
                      data-error={
                        errors.website && touched.website ? true : false
                      }
                      placeholder="Website"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="website" />
                    </span>
                  </div>
                </Col>

                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="url"
                      name="facebook"
                      id="facebook"
                      data-error={
                        errors.facebook && touched.facebook ? true : false
                      }
                      placeholder="Facebook"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="facebook" />
                    </span>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="url"
                      name="url"
                      id="url"
                      data-error={errors.url && touched.url ? true : false}
                      placeholder="Url"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="url" />
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <Row gutter={[50, 20]}>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="url"
                      name="linkedin"
                      id="linkedin"
                      data-error={
                        errors.linkedin && touched.linkedin ? true : false
                      }
                      placeholder="Linkedin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="linkedin" />
                    </span>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="profile-form__item">
                    <Input
                      type="url"
                      name="instagram"
                      id="instagram"
                      data-error={
                        errors.instagram && touched.instagram ? true : false
                      }
                      placeholder="Instagram"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="profile-form__input"
                      readOnly={!isEdit}
                    />
                    <span className="profile-form__error">
                      <ErrorMessage name="instagram" />
                    </span>
                  </div>
                </Col>

                {!screens.md && (
                  <Col span={24}>
                    <Avatar placeholder={avatarPlaceholder} />
                  </Col>
                )}

                <Col span={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="profile-form__button">
                    Direct Message
                  </Button>
                </Col>
              </Row>
            </Col>
            {screens.md && (
              <Col span={24} lg={{ span: 8 }}>
                <Avatar placeholder={avatarPlaceholder} />
              </Col>
            )}
          </Row>
        </Form>
      )}
    </Formik>
  );
}

import React from 'react';
import { Row, Col, Button } from 'antd';
import SubHeader from '../../components/SubHeader';

export default function TermsPage() {
  return (
    <div className="terms-page">
      <SubHeader title="Terms of Use" />
      <div className="terms-page__content-container container">
        <Row className="terms-page__content">
          <Col span={24}>
            <Row>
              <Col span={24}>
                <h2 className="terms-page__text-title">General Instructions</h2>
                <ul className="terms-page__text-list">
                  <li className="item">
                    We grant you permission to use our Site and other digital
                    assets , provided that you comply with these Terms .
                  </li>
                  <li className="item">
                    We reserve the right, at our discretion, to change or
                    terminate our Terms at any time.
                  </li>
                  <li className="item">
                    The Site is open for use only for individuals aged sixteen
                    (16) years or older.
                  </li>
                  <li className="item">
                    You are not allowed to copy, distribute, mirror, frame or
                    modify any part of the Site Content or Marks without our
                    prior written approval.
                  </li>
                  <li className="item">
                    The content on the Site, including without limitation, the
                    text, documents, articles, Dashboards, photos and everything
                    related to user interfaces, belong to Mesh and protected by
                    applicable copyright and/ or other intellectual property
                    laws.
                  </li>
                </ul>
              </Col>
              <Col span={24}>
                <h2 className="terms-page__text-title">
                  Platform’s concept - usage terms/ rules
                </h2>
                <ul className="terms-page__text-list">
                  <li className="item">
                    Mesh highlights and brings to the front , third party's such
                    as Freelancers, Companies and Individuals who want to
                    provide and get help and support from other community's
                    members.
                  </li>
                  <li className="item">
                    Mesh site and apps provide you with information ,
                    consulting, recommendations , advices, and content from
                    third party sources that are not owned or controlled by us
                    and are not connected to our company.
                  </li>
                  <li className="item">
                    We have no control over and cannot assure the quality of
                    these third parties information , consulting,
                    recommendations , advices and content.
                  </li>
                  <li className="item">
                    We have no responsibility for third party’s content, privacy
                    policies, actions or practices and/ or terms of use. We are
                    not responsible and cannot be reliable for such information
                    , consulting, recommendations , advices and content
                    accuracy, appropriateness, safety, or Intellectual Property
                    Rights.
                  </li>
                  <li className="item">
                    Our site and app may contain third party content and
                    information that is inaccurate, offensive and indecent. You
                    can decide if you want to interact with any third party on
                    this site or not. You hold and have fully responsibility and
                    liability for interacting with any third party on this site.
                  </li>
                  <li className="item">
                    We act as a community platform that connects between people
                    who need help in information , consulting, recommendations ,
                    advices and content. We shall not be responsible or liable
                    and do not guarantee the quality, and condition of services
                    and works that are appear or being recommended on our site.
                  </li>
                  <li className="item">
                    We do not provide any guarantee of the level of service
                    offered buy service providers to Buyers Platform’s terms for
                    Freelancers/ companies/ individuals
                  </li>
                </ul>
              </Col>
              <Col span={24}>
                <h2 className="terms-page__text-title">
                  Platform’s terms for Freelancers/ companies/ individuals
                </h2>
                <ul>
                  <li className="item">
                    This site acts as a community platform and aims to connect
                    between parties who need help .At any time you can remove
                    your card/ name from the community and stop your
                    partnership. For any question or request please contact us
                    by this mail : business@topipro.com your details will be
                    removed from the site within 3 business days.
                  </li>
                  <li className="item">
                    We reserve the right, at our sole discretion, to change
                    Mesh's community member list and/ or to add or remove any
                    member/ user from our site for any reason , at any time
                  </li>
                  <li className="item">
                    For being part of our community – members should pay a monthly subscription fee. At our sole discretion, such fee may be changed from time to time.
                  </li>
                  <li className="item">
                    By sharing and publishing your details and content you acknowledge that we can use your information as part of this site/ apps, as well as part of our promotion and community activities on any platform. We do not guarantee any confidentiality with respect to any of your user information and shared content.  You shall be solely responsible for your User Submissions and the consequences of posting, publishing or uploading them to our site.
                  </li>
                  <li className="item">
                    You agree that you will not display, post, submit, publish, or upload any content and/ information that deceptive under the consumer protection laws of any jurisdiction and/ or is protected by trade secret or otherwise subject to third party proprietary rights, unless you are the owner of such rights and/or creates a risk to people safety or health and/ or  promotes, or support or endorse illegal drugs, illegal gambling, or any other illegal activity.
                  </li>
                  <li className="item">
                    The users of Mesh acknowledge that Mesh is not responsible for any inaccurate, offensive, indecent, or objectionable content or information that is or will be included in this site.    You hereby agree to waive and hereby do waive, any legal or equitable rights or remedies you may have against Mesh.
                  </li>
                  <li className="item">
                    Please send us an email ( <a href="mailto:business@topipro.com">business@topipro.com</a> ) If would like to report regarding any Content you believe violates your Intellectual Property.
                  </li>
                  <li className="item">
                    You are solely responsible and liable for the use of this site and your use of third party websites and any content that you may send or post to a third party website.
                  </li>
                </ul>
              </Col>
              <Col span={24}>
                <h2 className="terms-page__text-title">
                  Limitation of Liability & Indemnity
                </h2>
                <ul>
                  <li className="item">
                    Mesh shell not be liable for any indirect , direct or incidental damages of any kind or for any loss of data, revenues, profits or reputation  raising out of your use of this sites and/or inability to use It.
                  </li>
                  <li className="item">
                    You agree to defend, indemnify and hold harmless Mesh and our partners, and our officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs and expenses (including but not limited to attorney's fees) arising from your use of, or inability to use the site and/ or your User Submissions and/ or your interaction with any third party sites and other users of this site.
                  </li>
                  <li className="item">
                    You and Mesh don’t have any contractual relations. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and Mesh.
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify="center">
          <Col span={24} flex="center">
            <div className="terms-page__button-flex-box">
              <Button type="primary" className="terms-page__terms-button">
                Approve
              </Button>
              <Button type="default" className="terms-page__terms-button">
                Cancel
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

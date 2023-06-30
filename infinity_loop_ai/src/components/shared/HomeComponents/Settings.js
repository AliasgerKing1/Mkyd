/*eslint-disable */
import React from 'react'

const Settings = () => {
  return (
    <>
   <div className="w-100 flex-lg-row-fluid mx-lg-13">
  {/*begin::Mobile toolbar*/}
  <div className="d-flex d-lg-none align-items-center justify-content-end mb-10">
    <div className="d-flex align-items-center gap-2">
      <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_start_sidebar_toggle">
        <i className="ki-outline ki-profile-circle fs-1" />      </div>
      <div className="btn btn-icon btn-active-color-primary w-30px h-30px" id="kt_social_end_sidebar_toggle">
        <i className="ki-outline ki-scroll fs-1" />      </div>
    </div>
  </div>
  {/*end::Mobile toolbar*/}      
  {/*begin::Connected Accounts*/}
  <div className="card mb-5 mb-xl-10">
    {/*begin::Card header*/}
    <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_connected_accounts" aria-expanded="true" aria-controls="kt_account_connected_accounts">
      <div className="card-title m-0">
        <h3 className="fw-bold m-0">Connected Accounts</h3>
      </div>
    </div>
    {/*end::Card header*/}
    {/*begin::Content*/}
    <div id="kt_account_settings_connected_accounts" className="collapse show">
      {/*begin::Card body*/}
      <div className="card-body border-top p-9">
        {/*begin::Notice*/}
        <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed mb-9 p-6">
          {/*begin::Icon*/}
          <i className="ki-outline ki-design-1 fs-2tx text-primary me-4" />        {/*end::Icon*/}
          {/*begin::Wrapper*/}
          <div className="d-flex flex-stack flex-grow-1 ">
            {/*begin::Content*/}
            <div className=" fw-semibold">
              <div className="fs-6 text-gray-700 ">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing code. <a href="#" className="fw-bold">Learn More</a></div>
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Wrapper*/}  
        </div>
        {/*end::Notice*/}
        {/*begin::Items*/}
        <div className="py-2">
          {/*begin::Item*/}
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/assets/media/svg/brand-logos/google-icon.svg" className="w-30px me-6" alt />
              <div className="d-flex flex-column">
                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Google</a>
                <div className="fs-6 fw-semibold text-gray-400">Plan properly your workflow</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-check form-check-solid form-check-custom form-switch">
                <input className="form-check-input w-45px h-30px" type="checkbox" id="googleswitch" defaultChecked />
                <label className="form-check-label" htmlFor="googleswitch" />
              </div>
            </div>
          </div>
          {/*end::Item*/}
          <div className="separator separator-dashed my-5" />
          {/*begin::Item*/}
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/assets/media/svg/brand-logos/github.svg" className="w-30px me-6" alt />
              <div className="d-flex flex-column">
                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Github</a>
                <div className="fs-6 fw-semibold text-gray-400">Keep eye on on your Repositories</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-check form-check-solid form-check-custom form-switch">
                <input className="form-check-input w-45px h-30px" type="checkbox" id="githubswitch" defaultChecked />
                <label className="form-check-label" htmlFor="githubswitch" />
              </div>
            </div>
          </div>
          {/*end::Item*/}
          <div className="separator separator-dashed my-5" />
          {/*begin::Item*/}
          <div className="d-flex flex-stack">
            <div className="d-flex">
              <img src="/assets/media/svg/brand-logos/slack-icon.svg" className="w-30px me-6" alt />
              <div className="d-flex flex-column">
                <a href="#" className="fs-5 text-dark text-hover-primary fw-bold">Slack</a>
                <div className="fs-6 fw-semibold text-gray-400">Integrate Projects Discussions</div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-check form-check-solid form-check-custom form-switch">
                <input className="form-check-input w-45px h-30px" type="checkbox" id="slackswitch" />
                <label className="form-check-label" htmlFor="slackswitch" />
              </div>                      
            </div>
          </div>
          {/*end::Item*/}
        </div>
        {/*end::Items*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div className="card-footer d-flex justify-content-end py-6 px-9">
        <button className="btn btn-light btn-active-light-primary me-2">Discard</button>
        <button className="btn btn-primary">Save Changes</button>
      </div>
      {/*end::Card footer*/}
    </div>
    {/*end::Content*/}
  </div>
  {/*end::Connected Accounts*/}
  {/*begin::Notifications*/}
  <div className="card  mb-5 mb-xl-10">
    {/*begin::Card header*/}
    <div className="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_notifications" aria-expanded="true" aria-controls="kt_account_notifications">
      <div className="card-title m-0">
        <h3 className="fw-bold m-0">Notifications</h3>
      </div>
    </div>
    {/*begin::Card header*/}
    {/*begin::Content*/}
    <div id="kt_account_settings_notifications" className="collapse show">
      {/*begin::Form*/}
      <form className="form">
        {/*begin::Card body*/}
        <div className="card-body border-top px-9 pt-3 pb-4">
          {/*begin::Table*/}
          <div className="table-responsive">
            <table className="table table-row-dashed border-gray-300 align-middle gy-6">
              <tbody className="fs-6 fw-semibold">
                {/*begin::Table row*/}
                <tr>
                  <td className="min-w-250px fs-4 fw-bold">Notifications</td>
                  <td className="w-125px">
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="kt_settings_notification_email" defaultChecked data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=email]" />
                      <label className="form-check-label ps-2" htmlFor="kt_settings_notification_email">
                        Email
                      </label>
                    </div>
                  </td>
                  <td className="w-125px">
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="kt_settings_notification_phone" defaultChecked data-kt-check="true" data-kt-check-target="[data-kt-settings-notification=phone]" />
                      <label className="form-check-label ps-2" htmlFor="kt_settings_notification_phone">
                        Phone
                      </label>
                    </div>
                  </td>
                </tr>
                {/*begin::Table row*/}
                {/*begin::Table row*/}
                <tr>
                  <td>Billing Updates</td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue={1} id="billing1" defaultChecked data-kt-settings-notification="email" />
                      <label className="form-check-label ps-2" htmlFor="billing1" />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="billing2" defaultChecked data-kt-settings-notification="phone" />
                      <label className="form-check-label ps-2" htmlFor="billing2" />
                    </div>
                  </td>
                </tr>
                {/*begin::Table row*/}
                {/*begin::Table row*/}
                <tr>
                  <td>New Team Members</td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="team1" defaultChecked data-kt-settings-notification="email" />
                      <label className="form-check-label ps-2" htmlFor="team1" />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="team2" data-kt-settings-notification="phone" />
                      <label className="form-check-label ps-2" htmlFor="team2" />
                    </div>
                  </td>
                </tr>
                {/*begin::Table row*/}
                {/*begin::Table row*/}
                <tr>
                  <td>Completed Projects</td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="project1" data-kt-settings-notification="email" />
                      <label className="form-check-label ps-2" htmlFor="project1" />
                    </div>
                  </td>
                  <td>
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="project2" defaultChecked data-kt-settings-notification="phone" />
                      <label className="form-check-label ps-2" htmlFor="project2" />
                    </div>
                  </td>
                </tr>
                {/*begin::Table row*/}
                {/*begin::Table row*/}
                <tr>
                  <td className="border-bottom-0">Newsletters</td>
                  <td className="border-bottom-0">
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="newsletter1" data-kt-settings-notification="email" />
                      <label className="form-check-label ps-2" htmlFor="newsletter1" />
                    </div>
                  </td>
                  <td className="border-bottom-0">
                    <div className="form-check form-check-custom form-check-solid">
                      <input className="form-check-input" type="checkbox" defaultValue id="newsletter2" data-kt-settings-notification="phone" />
                      <label className="form-check-label ps-2" htmlFor="newsletter2" />
                    </div>
                  </td>
                </tr>
                {/*begin::Table row*/}
              </tbody>
            </table>
          </div>
          {/*end::Table*/}
        </div>
        {/*end::Card body*/}
        {/*begin::Card footer*/}
        <div className="card-footer d-flex justify-content-end py-6 px-9">
          <button className="btn btn-light btn-active-light-primary me-2">Discard</button>
          <button className="btn btn-primary  px-6">Save Changes</button>
        </div>
        {/*end::Card footer*/}
      </form>
      {/*end::Form*/}
    </div>
    {/*end::Content*/}
  </div>
  {/*end::Notifications*/}
</div>

    </>
  )
}

export default Settings

<template>
  <div class="bs-5">
    <div class="d-flex align-items-center form-section-right my-0">
      <form @submit.prevent="submitRegistration" novalidate>
        <small v-if="validation_errors.as" style="color: red">
          {{ validation_errors.as[0] }}
        </small>
        <div class="right-wrapper form-group">
          <div v-if="!pwRequirementVisibility && !tcRequirementVisibility">
            <div class="" style="margin-bottom:70px">
              <div class="mb-3">
                <label class="mb-2" for="exampleInputEmail1">First Name</label>
                <input required v-model="register_form.firstname" type="text" class="form-control required-field"
                  :class="{ 'is-invalid': validation_errors.firstname }" autocomplete="off" />
              </div>
              <div class="mb-3">
                <label class="mb-2" for="exampleInputEmail1">Last Name</label>
                <input required v-model="register_form.lastname" type="text" class="form-control required-field"
                  :class="{ 'is-invalid': validation_errors.lastname }" autocomplete="off" />
              </div>

              <div class="mb-3">
                <label class="mb-2" for="exampleInputEmail1">Email</label>
                <input required :class="{ 'is-invalid': validation_errors.email }" v-model="register_form.email"
                  type="email" class="form-control required-field" autocomplete="off" />
              </div>

              <div class="mb-3">
                <label class="mb-2 d-flex justify-content-between" for="exampleInputEmail1">
                  <span>Password</span><span class="text-right"><a v-on:click="onClickPWRequirementHandler(true)"
                      href="javascript:void(0)">View password requirements</a></span></label>
                <input required :class="{ 'is-invalid': validation_errors.password }" v-model="register_form.password"
                  type="password" class="form-control required-field" autocomplete="new-password" />
              </div>

              <div class="mb-3">
                <label class="mb-2" for="exampleInputEmail1">Confirm Password</label>
                <input required :class="{ 'is-invalid': validation_errors.password_confirmation }"
                  v-model="register_form.password_confirmation" type="password" class="form-control required-field"
                  autocomplete="new-password" />
              </div>

              <div class="mb-3">
                <label class="mb-2" for="exampleInputEmail1">Telephone</label>
                <input required :class="{ 'is-invalid': validation_errors.phone }" v-model="register_form.phone"
                  type="text" class="form-control required-field" autocomplete="off" placeholder="+1XXXXXXXXXX" />
              </div>

              <div class="form-check d-flex custom-checkbox">
                <input required v-model="register_form.terms" type="checkbox" value="new"
                  class="form-check-input mt-1 me-2 required-field" id="" checked />
                <label class="form-check-label pl-2" for="">
                  I agree to the Casa Beau Monde
                  <a v-on:click="onClickTCRequirementHandler(true)" href="javascript:void(0)">Terms & Conditions</a>
                </label>
              </div>
            </div>

            <div class="d-flex button-wrapper">
              <a href="/" class="btn btn-dark text-white px-4 border border-white">
                Cancel
              </a>
              <button type="submit" class="btn btn-light font-color-black px-4">
                Continue
              </button>
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-center details-modal p-3" style="position:absolute;top:40%;"  v-else-if="pwRequirementVisibility">
            <div class="w-100 font-base">
              <h3 class="text-center text-white">Password Requirements</h3>
              <p class="text-white ">
&bullet; MUST contain at least 8 characters (12+ recommended)<br />
&bullet; MUST contain at least one uppercase letter<br />
&bullet; MUST contain at least one lowercase letter<br />
&bullet; MUST contain at least one number<br />
&bullet; MUST contain at least one special character (!&rdquo;#$%&amp;'()*+,-./:;&lt;=&gt;?@[\]^_`{|}~ )
              </p>
            </div>
            <button v-on:click="onClickPWRequirementHandler(false)">
              <customIcon icon="close" label="Close Icon" class="w-100" />
            </button>
          </div>

          <div class="d-flex align-items-center details-modal terms-modal p-3" v-else-if="tcRequirementVisibility">
            <div class="font-base w-100">
              <h3 class="text-center text-white"><strong>Terms & Conditions</strong></h3>
<pre class="text-white">
The following terms of use ("Terms") constitute an agreement between Casa Beau Monde, Inc.
("CBM"), and you that governs your use of this website, application and all of its associated
services, content, and functionality. This policy applies to the website administered by CBM
("Website"), located at https://casabeaumonde.com, and any applications, including, but not
limited to, a CBM mobile application (“App”) owned or operated by CBM. Collectively, the
Website and App are referred to as the CBM Platform.

Your use of the CBM Platform constitutes your acceptance of, and agreement to, the following
Terms of Use. CBM reserves the right to modify, alter, amend or update its Website, App,
policies and these Terms. These Terms are subject to change without notice. If you do not agree
with or do not accept any part of these Terms of Use, you must not use the CBM Platform.
Please note that not all features or functionality described in these Terms will be available for all
users of the CBM Platform and may only be available upon payment to CBM.

<strong>CBM PLATFORM</strong>
Casa Beau Monde is a shopping platform that allows registered users (“Users”) to view items
from multiple online retailers and save items to the User’s account (“Closet”). Users may use the
Closet solely for curation, or Users will have the ability to purchase items listed on the CBM
Platform. CBM is not directly involved in the transaction between the User and any third-party
merchant, unless specifically defined herein.

CBM has no control over the quality, safety, morality, or legality of any aspect of the items or
merchants linked on the CBM Platform. CBM does not pre-screen all merchandise or products listed
on the CBM Platform or the content or information provided by retailers or other users. You agree
that CBM is a technological platform and as such is not responsible or liable for any content,
including but not limited to data, text, information, usernames, graphics, images, photographs,
profiles, audio, video, items, and links posted by you or other users, or third parties on the CBM
Platform. You use the CBM Platform at your own risk.

CBM does not guarantee that items fulfilled by third parties will be in stock or in the size and color
you may need. CBM does not guarantee the quality of any items linked on the CBM Platform or that
the items will appear as they are depicted in photos on the CBM Platform. Please use sizing
recommendations provided by all retailers featured on the CBM Platform prior to making your
purchase.

CBM is not responsible for any shipping errors, pricing discrepancies, or other purchase-related
complaints related to purchases made with any third party listed on the site.

<strong>REGISTRATION & RESTRICTED ACCESS</strong>
Access to certain areas of the CBM Platform may be restricted. CBM reserves the right to restrict
areas of the CBM Platform at its sole discretion.
Some restricted areas of the CBM Platform may be made available only to Users. When you are
register as a User, you are required to create a user profile, which may include a username and
password. You agree to keep your username and password confidential. If you suspect your
password has been compromised, you must notify CBM immediately at
info@casabeaumonde.com. CBM will not be liable for any loss caused by the unauthorized use
of your account; however, you may be liable to CBM or other third parties for any losses
incurred due to such unauthorized use.

CBM may disable your username and password at its sole discretion.

CBM reserves the right to modify methods for registration and access levels of registered users
from time to time.

<strong>USER ELIGIBILITY</strong>
CBM may, in its sole discretion, refuse to offer access to or use of the CBM Platform to any person or
entity. CBM reserves the right to change any User eligibility criteria at any time. This provision is void
where prohibited by law and the right to access the CBM Platform is revoked in such jurisdictions.

<strong>Age</strong>
Users must be individuals who are 18 years and older who can form legally binding contracts under
applicable law. By using the CBM Platform, registering to become a member, or creating an account
to use the CBM Platform, you represent and warrant that: (a) you are at least 18 years old; (b) all
registration information you submit is accurate and truthful; and (c) if you are acting on behalf of a
legal or business entity, you are authorized to bind that entity to the Agreement.
Individuals under the age of 18 must at all times use the CBM Platform only in conjunction with and
under the supervision of a parent or legal guardian who is at least 18 years of age. In all cases, the
adult is the User and is responsible for any and all activities of any minors.

<strong>Compliance</strong>
You agree to comply with all laws including all laws applicable in the jurisdiction from which you are
accessing the CBM Platform regarding acceptable content and online conduct. You are responsible
for all applicable taxes. In addition, you must abide by any applicable CBM policies as stated in the
Agreement and other Policies available via hyperlink in this Agreement (as applicable to your
activities on or use of the CBM Platform) as well as all other operating rules, policies, and procedures
that may be published from time to time on the CBM Platform, each of which is incorporated herein
by reference and each of which may be updated by CBM from time to time without notice to you.
In addition, some services offered on the CBM Platform may be subject to additional terms and
conditions circulated by CBM from time to time; your use of these services is subject to those
Additional Terms, which are incorporated into this Agreement by this reference.

<strong>Account Transfer</strong>
You may not transfer, sell, rent, assign, sublicense, or otherwise allow another party to access or use
your CBM User account. You are responsible for all activity of the User account. If you are registering
as a business entity, you personally guarantee that you have the authority to bind the entity to this
Agreement.

<strong>Right to Refuse Service</strong>
The CBM Platform is not available to temporarily or indefinitely suspended CBM Users. CBM reserves
the right, in its sole discretion, to cancel unconfirmed or inactive accounts. CBM reserves the right to
refuse service to anyone, for any reason, at any time.

<strong>ACCOUNT TYPES</strong>
CBM offers different levels of membership to its Users.

<strong>Level 1</strong>
All Users receive the following benefits at no cost:
&nbsp;&nbsp;&nbsp;&nbsp; • Access to create a Closet with up to 500 items, which is accessible by any other CBM
Member.
&nbsp;&nbsp;&nbsp;&nbsp; • Access to hire a CBM Influencer as a stylist (“Styling”);
&nbsp;&nbsp;&nbsp;&nbsp; • Shop content from retailers, boutiques, and CBM Influencers;
&nbsp;&nbsp;&nbsp;&nbsp; • Access to live events; and
&nbsp;&nbsp;&nbsp;&nbsp; • Communication with other Users via chat.

<strong>Level 2</strong>
Level 2 includes all User benefits of Level 1 and the following:
&nbsp;&nbsp;&nbsp;&nbsp; • Ability to make closet private so it may not be viewed by other Members; and
&nbsp;&nbsp;&nbsp;&nbsp; • Ability to store up to ___ items in your Closet.
The cost of Level 2 is $9.99 per month or an annual fee of $100. Please see the Purchase Policies
for more information.

<strong>Level 3</strong>
Level 3 includes all User benefits from Levels 1 and 2 and the following:
&nbsp;&nbsp;&nbsp;&nbsp; • Ability to store up to ___ items in your Closet.
&nbsp;&nbsp;&nbsp;&nbsp; • Exclusive events, discounts, and promotions.
The cost of Level 3 is $99 per month or an annual fee of $950. Please see the Purchase Policies
for more information.

<strong>Level 4</strong>
Level 4 includes all User benefits from Levels 1, 2 and 3, and the following:
&nbsp;&nbsp;&nbsp;&nbsp; • Ability to store up to ___ items in your Closet.
&nbsp;&nbsp;&nbsp;&nbsp; • Exclusive events, discounts, and promotions.
The cost of Level 4 is $249 per month or an annual fee of $2,300. Please see the Purchase
Policies for more information.

<strong>PURCHASE POLICIES</strong>
As stated above, CBM will not process any purchases made from retailers. The purchase policies
of the retailer will apply. This Purchase Policy applies solely to purchases made directly through
the CBM Platform, which are described below.

On the CBM Platform, Users may purchase Styling from a CBM Influencer. Additionally, Users
may upgrade their account from Level 1, which is free, to other paid levels.

<strong>Styling Services</strong>
On the CBM Platform, Users may engage a CBM Influencer for Styling. By engaging the CBM
Influencer, User agrees to pay the rates set by the CBM Influencer for Styling. User must prepay
for Styling. All funds will be held until the Styling has been completed. Upon completion of
Styling, the funds will be released to the CBM Influencer.

User understands and agrees that engaging a CBM Influencer for Styling is a feature of the CBM
Platform; however, CBM does not guarantee User’s satisfaction and User is acting at its own risk
by engaging the CBM Influencer.

Refunds are not available for any Styling that has been completed. Refunds will only be
considered if the Styling has not been completed. In the event that Styling is incomplete after 5
days, funds paid for the Styling will be returned to User.

If User is dissatisfied with the Styling provided by a CBM Influencer, the User may dispute the
Styling fee with CBM. This should only be used in extreme cases. If User simply doesn’t like the
CBM Influencer’s choices, this is not a sufficient reason for a dispute.

<strong>CBM Users – Levels 2, 3, and 4</strong>
As stated above, all Users may upgrade their membership to another level to access additional
benefits. The upgraded level will be selected on the CBM Platform and will be automatically
billed on a monthly basis unless User has selected an annual option. Your paid User membership
may be canceled at any time. No refunds will be granted on unused portions. Your User
membership will remain active until the expiration date when your next payment would have
previously been due. At the time of cancellation, if User has more than 500 items in User’s
Closet, the first 500 items will be retained and all others will be deleted.

Users can also elect to downgrade their account status. If this is done, the additional benefits for
the higher level will be retained until the end of that billing cycle. After that time, the User
benefits will reflect the current level. Items in a User’s Closet may be deleted if it is over the
amount allowed for a particular level.

The CBM Platform does not offer refunds after the monthly fee for a User has been charged.
CBM Users may avoid incurring additional fees by cancelling this service prior to the billing date.

<strong>COMMUNITY POLICIES</strong>

The CBM Platform offers the ability for all members, including Users, Influencers, and Retailers
to send messages and interact with other members. CBM has adopted the following
membership policies. CBM will use its sole discretion to determine if a member has violated
these policies. If a member is found to be in violation, it may result in an immediate dismissal
from the CBM Platform. If you are removed from the CBM Platform, no refunds will be due to
you and any future payments will be stopped.

If you have any concerns about a member’s behavior, please contact info@casabaumonde.com.
Please have screenshots available to support your concerns.

CBM has adopted the following Code of Conduct. The following types of contributions will not
be tolerated and will be considered a violation of the Community Policy:
&nbsp;&nbsp;&nbsp;&nbsp; • harassment directed toward any User or CBM/CBM team member;
&nbsp;&nbsp;&nbsp;&nbsp; • spam;
&nbsp;&nbsp;&nbsp;&nbsp; • hate speech;
&nbsp;&nbsp;&nbsp;&nbsp; • defamatory statements regarding Company or any third party;
&nbsp;&nbsp;&nbsp;&nbsp; • sexual content;
&nbsp;&nbsp;&nbsp;&nbsp; • references to illegal acts; or,
&nbsp;&nbsp;&nbsp;&nbsp; • contributions that may violate the legal rights of a third party.

<strong>AFFILIATE MARKETING</strong>
From time to time, the CBM Platform may engage in affiliate marketing. This means that if you
use an affiliate link to make a purchase, CBM will receive a commission on that purchase. All
efforts are made to ensure that affiliate links are disclosed in accordance with the FTC.

<strong>DISCLAIMER</strong>
CBM disclaims liability for incidental or consequential damages and assumes no responsibility or
liability for any loss or damage suffered by any person as a result of use of the information
provided on the CBM Platform. The CBM Platform assumes or undertakes no liability for any loss
or damage suffered as a result of the use of any information found on the CBM Platform.

<strong>YOUR RESPONSIBILITY</strong>
The CBM Platform was developed strictly for informational purposes. You understand and agree
that you are fully responsible for your use of the information provided on the CBM Platform.
CBM makes no representations, warranties or guarantees. You understand that results may vary
from person to person. CBM assumes no responsibility for errors or omissions that may appear
on the CBM Platform.

<strong>OWNERSHIP OF THE WEBSITE</strong>
The CBM Platform includes all materials that are included in or are otherwise a part of the CBM
Platform (including past, present and future versions of the CBM Platform), including, but not
limited to: graphics; layout; text; instructions; images; trademarks, logos, and service marks;
audio; videos; designs; technology; applications; artwork; information; data; compilations;
advertising copy; domain names; any and all copyrightable material (including without limitation
source and object code); the “look and feel” of the CBM Platform; the compilation, assembly
and arrangement of the CBM Platform’s materials; and all other materials related to the CBM
Platform (collectively, “Materials”).
The Materials are owned by or licensed to CBM and are protected from unauthorized use,
copying and dissemination by copyright, trademark, patent, and other laws, rules, regulations
and treaties. Except as expressly set forth in these Terms or expressly granted to you in writing
by CBM, no rights in the Materials (either by implication, estoppel or otherwise) are granted to
you. You acknowledge that you do not acquire any ownership rights in the Materials by using
the Website. You may only use the Materials as expressly set forth in these Terms.
UNAUTHORIZED USE, COPYING, REPRODUCTION, STORING, MODIFICATION, REPUBLISHING,
UPLOADING, DOWNLOADING, POSTING, TRANSMITTING, DISTRIBUTING, DUPLICATING,
REMOVAL OR ALTERATION OF ADVERTISING OR ANY OTHER MISUSE OF ANY OF THE MATERIALS
IS STRICTLY PROHIBITED.

<strong>USE OF THE CBM PLATFORM</strong>
Unless expressly stated herein, all intellectual property rights in the CBM Platform and Materials
are reserved. Your use of the CBM Platform and Materials is set forth herein.

You may view, download (for caching purposes only), and print pages for your personal use,
subject to the restrictions set out below and elsewhere in these Terms.
The following uses are not permitted:
&nbsp;&nbsp;&nbsp;&nbsp; • Republication of content from the CBM Platform or Materials, unless content is
specifically and expressly made available for republication;
&nbsp;&nbsp;&nbsp;&nbsp; • Sale, rental or sub-license of any content from the CBM Platform or Materials;
&nbsp;&nbsp;&nbsp;&nbsp; • Reproduction or duplication of any content on the CBM Platform or within the Materials
for commercial purposes;
&nbsp;&nbsp;&nbsp;&nbsp; • Modification of any content on the CBM Platform or within the Materials, unless
content is specifically and expressly made available for modification;
&nbsp;&nbsp;&nbsp;&nbsp; • Redistribution of content of the CBM Platform or Materials, unless content is specifically
and expressly made available for redistribution. Users are permitted to share content on
social media channels, as long as a link to the CBM Platform is included.

From time to time, the CBM Platform may utilize various plugins or widgets to allow sharing of
the Materials via social media channels, email, or other methods. Use of these plugins or
widgets does not constitute any waiver of CBM's intellectual property rights. Such use is a
limited license to republish the applicable content on the approved social media channels, with
full credit to CBM.

You must not use the CBM Platform in a way that causes, or may cause, damage to the CBM
Platform or impair the availability of access to the CBM Platform. You must not decompile,
reverse engineer, disassemble or otherwise reduce the Website, except to the extent that such
activity is expressly permitted by applicable law. You must not use the CBM Platform to copy,
store, host, transmit, send, use, publish or distribute any material that consists of (or is linked
to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit and/or other
harmful code or malicious software.

You must not conduct any systematic or automated data collection activities, including, but not
limited to scraping, data mining, data extraction or data harvesting on or in relation to the CBM
Platform without CBM's express written permission.
You must not use the CBM Platform to transmit or send any unsolicited commercial
communications.

You must not use the CBM Platform for any third-party marketing without CBM's express
written permission.

<strong>GRANT OF RIGHTS</strong>
You grant CBM a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce,
adapt, publish, translate and distribute any content you contribute to the CBM Platform. This
includes, but is not limited to, text, images, audio material, comments, video material and
audio-visual material. This license extends to all known and future media. You also grant CBM
the right to sub-license these rights and the right to bring an action for infringement of these
rights.

<strong>CONTENT CONTRIBUTED TO THE CBM PLATFORM</strong>
Any content you contribute to the CBM Platform, including, but not limited to text, images,
audio material, comments, video material and audio-visual material, must not be illegal or
unlawful, may not infringe on any third-party's legal rights, and must not be capable of giving
rise to legal action whether against you or CBM or a third party.

CBM reserves the right to edit or remove: (i) any material submitted to the CBM Platform; (ii)
stored on CBM's servers; or, (iii) hosted or published on the CBM Platform. CBM takes no
responsibility and assumes no liability for any content posted by you or any third party.

Notwithstanding CBM's rights under the Terms of Use, CBM does not undertake to monitor the
submission of all content to, or the publication of such content on, the CBM Platform.

<strong>COMMUNICATION</strong>
If you send CBM an email, register to use the CBM Platform or provide your email to CBM in any
other way, you consent to receive communications from CBM electronically. You agree that all
legal notices provided via electronic means from CBM satisfy any requirement for written
notice.

<strong>THIRD PARTIES</strong>
The CBM Platform contains links to third-party websites that are not governed or controlled by
CBM. You represent and warrant that you have read and agree to be bound by all applicable
Terms and policies for any third-party website that relates to your use of the CBM Platform.
CBM assumes no control or liability over the content of any third-party sites. You expressly hold
harmless CBM from any and all liability related to your use of a third-party website.

Prior to engaging in any events or commercial transactions with any third parties discovered
through or linked on the CBM Platform, you must complete any necessary investigation or due
diligence. If there is a dispute for any events or commercial transactions with a third party
discovered through or linked on the CBM Platform, you expressly hold CBM harmless from any
and all liability in any dispute.

<strong>NO WARRANTIES</strong>
The CBM Platform is provided on an "as is" and "as available" basis without any representations
or warranties, expressed or implied. CBM makes no representations or warranties in relation to
the CBM Platform or the information and materials provided therein.

CBM makes no warranty the CBM Platform will meet your requirements; will be available
uninterrupted; timely and free of viruses or bugs; or represents the full functionality, accuracy,
and reliability of the CBM Platform. CBM is not responsible to you for the loss of any content or
material uploaded or transmitted through the CBM Platform. The CBM Platform is written in
English and makes no warranty regarding translation or interpretation of content in any
language.

<strong>LIMITATION OF LIABILITY</strong>
CBM WILL NOT BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, INDIRECT, EXEMPLARY,
PUNITIVE OR SPECIAL DAMAGES OF ANY KIND, HOWEVER CAUSED, INCLUDING LOSS OF
PROFITS, REVENUE, DATA OR USE, INCURRED BY YOU, WHETHER UNDER THEORY OF
CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY OR OTHERWISE, EVEN IF THE OTHER
PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

<strong>INDEMNITY</strong>
You agree to defend, indemnify and hold CBM, its members, employees, officers, directors,
managers and agents harmless from and against any and all losses, claims, suits, actions,
liabilities, obligations, costs and expenses (including reasonable attorneys' fees and expenses)
which CBM suffers as a result of third-party claims based on: (i) your negligence or intentional
misconduct, (ii) your breach of any provision of the Terms (including representation or
warranty); (iii) materials prepared or provided by you including, but not limited to, any claims of
infringement, or misappropriation of copyright, trademark, patent, trade secret, or other
intellectual property or proprietary right, infringement of the rights of privacy or publicity, or
defamation or libel; or (iv) death, personal injury, or property damage arising out of, or relating
to, your obligations hereunder.

<strong>ARBITRATION</strong>
The Terms of Use will be governed and construed in accordance with the laws of the State of
Nevada. Any controversy or claim arising out of or relating to the Terms of Use, or the breach
thereof, shall be settled by arbitration administered by the American Arbitration Association
("AAA") under its Commercial Arbitration Rules, and judgment on the award rendered by the
arbitrator(s) may be entered in any court having jurisdiction thereof. The place of any such
arbitration shall be in or near Clark County, Nevada. The parties also agree that the AAA
Optional Rules for Emergency Measures of Protection shall apply to the proceedings.

<strong>MISCELLANEOUS PROVISIONS</strong>
If any provision(s) of the Terms is held to be invalid, illegal or unenforceable, the remaining
provisions shall be severable and enforceable. If a provision is excessively broad, such a
provision shall be limited or reduced in scope so as to be enforceable.

The Terms of Use may not be assigned by you without CBM's prior written consent, however,
the Terms of Use may be assigned by CBM in its sole discretion.

The Terms of Use are the final, complete, and exclusive agreement of the parties with respect to
the CBM Platform offered by CBM.

All notices with respect to the Terms of Use must be in writing and may be via email to
info@casabeaumonde.com for CBM and to your email address.
</pre>
            </div>
            <button v-on:click="onClickTCRequirementHandler(false)">
              <customIcon icon="close" label="Close Icon" class="w-100" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import customIcon from '@/components/general/customIcon.vue'
import axios from 'axios'
// // import { useToast } from "vue-toastification";;
import { RegisterHandler } from '../../service/authentication.js'
import { useQuasar } from 'quasar'
import { usingToast } from '~~/utils/toastUtils'

export default {
  props: [
    'direction',
    'imagePath',
    'type',
    'heading',
    'description',
    'btnText',
    'role'
  ],
  components: {
    customIcon
  },
  setup () {
    // const toast = useToast();
    const q = useQuasar()
    return { q }
  },
  data () {
    return {
      register_form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        terms: true,
        as: 'customer'
      },
      validation_errors: {
        firstname: ''
      },
      myClass: 'is-invalid',
      pwRequirementVisibility: false,
      tcRequirementVisibility: false
    }
  },
  methods: {
    formVerification (errorResponse) {
      this.validation_errors = {}
      for (const err in errorResponse.response.data.errors) {
        this.validation_errors[err] = true
        // this.toast.error(errorResponse.response.data.errors[err][0]);
        // this.q.notify({
        //     message: errorResponse.response.data.errors[err][0],
        //     color: "red",
        //     position: "top",
        // });
        usingToast('seccess', errorResponse.response.data.errors[err][0])
      }
    },
    async submitRegistration () {
      try {
        await RegisterHandler(this.register_form, '/register/two-factor-auth')
      } catch (error) {
        this.formVerification(error)
      }
    },

    onClickPWRequirementHandler: function (e) {
      if (!e) {
        this.pwRequirementVisibility = false
      } else {
        this.pwRequirementVisibility = true
      }
    },

    onClickTCRequirementHandler: function (e) {
      if (!e) {
        this.tcRequirementVisibility = false
      } else {
        this.tcRequirementVisibility = true
      }
    }
  },
  mounted () {
    const url_string = window.location.href
    const url = new URL(url_string)
    this.register_form.as = url.searchParams.get('as')
  }
}
</script>

<style>
  .bs-5 pre b,
  .bs-5 pre strong {
    font-weight: bold;
  }
  .bs-5 pre {
    width: 100%;
    max-width: 100%;
    overflow: auto;
    white-space: pre-wrap;
  }

.form-section-right .right-wrapper .terms-modal div {
    max-height: 600px;
    overflow: auto;
    padding-right: 15px;
    margin-top: 15px;
}

</style>

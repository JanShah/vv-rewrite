import React from 'react'
import Helmet from 'react-helmet'
const navToComponent=(nav)=>{
	const comps = {
		contact:Contact,
		products:AllCategories,
		about:About,
		terms:Terms,
		blog:Blog
	}
	return comps[nav]
}

export const Pages   = props=>{
	const Page = navToComponent(props.name)
return <Page />

}

const AllCategories =()=>{
	return <section>
		<Helmet>
			<title>All Categories | VVV</title>
		</Helmet>
		all Categories
	</section>
}

const Contact =()=>{
	return <section>
		<Helmet>
			<title>Contact Us | VVV</title>
		</Helmet>
		Contact Us
	</section>
}

const About =()=>{
	return <section>
		<Helmet>
			<title>About Us | VVV</title>
		</Helmet>
		
		A bit more About
	</section>
}

const Terms =()=>{
	return <div>
		<Helmet>
			<title>Terms and conditions | VVV</title>
		</Helmet>
		
		<section id="introduction">
			{/* Terms and conditions generated using https://termsfeed.com - original at https://termsfeed.com/terms-conditions/92f7823bf0fd4eea380a96491981ccb8 */}
			<h2>Terms and Conditions ("Terms")</h2>
			<em>Last updated: November 13, 2017</em>
			<p>
				Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the http://vvv.today website
				(the "Service") operated by Valiants Vintage Vestures (
				<abbr title="Valiants Vintage Vestures">vvv</abbr>) ("us", "we", or "our").
			</p>
			<p>
				Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply
				to all visitors, users and others who access or use the Service.
			</p>
			<p>
				By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you
				may not access the Service. Terms &amp; Conditions created by TermsFeed for vvv.
			</p>
		</section>
		<section id="account">
			<h3>Accounts</h3>
			<p>
				When you create an account with us, you must provide us information that is accurate, complete, and current at all times.
				Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our
				Service.
			</p>
			<p>
				You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under
				your password, whether your password is with our Service or a third-party service.
			</p>
			<p>
				You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach
				of security or unauthorized use of your account.
			</p>
		</section>
		<section id="links">
			<h3>Links To Other Web Sites</h3>
			<p>
				Our Service may contain links to third-party web sites or services that are not owned or controlled by vvv.
			</p>
			<p>
				vvv has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party
				web sites or services. You further acknowledge and agree that vvv shall not be responsible or liable, directly or indirectly,
				for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content,
				goods or services available on or through any such web sites or services.
			</p>
			<p>
				We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that
				you visit.
			</p>
		</section>
		<section id="termination">
			<h3>Termination</h3>
			<p>
				We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever,
				including without limitation if you breach the Terms.
			</p>
			<p>
				All provisions of the Terms which by their nature should survive termination shall survive termination, including, without
				limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
			</p>

			<p>
				We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including
				without limitation if you breach the Terms
			</p>

			<p>
				Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply
				discontinue using the Service.
			</p>
			<p>
				All provisions of the Terms which by their nature should survive termination shall survive termination, including, without
				limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
			</p>
		</section>
		<section id="law">
			<h3>Governing Law</h3>
			<p>
				These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict
				of law provisions.
			</p>
			<p>
				Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision
				of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain
				in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any
				prior agreements we might have between us regarding the Service.
			</p>
		</section>
		<section id="changes">
			<h3>Changes</h3>
			<p>
				We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we
				will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change
				will be determined at our sole discretion.
			</p>
			<p>
				By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
				If you do not agree to the new terms, please stop using the Service.
			</p>
		</section>
		<section id="contact">
			<h3>Contact Us</h3>
			<p>
				If you have any questions about these Terms, please
				<a href="contact.html">contact us</a>.
			</p>
		</section></div>
}

const Blog =()=>{
	return <section>
		<Helmet>
			<title>Blog | VVV</title>
		</Helmet>
		We Blog therefore we are
	</section>
}



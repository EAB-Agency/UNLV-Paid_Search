import React from 'react';
import Helmet from 'react-helmet';
import Thumbnail from 'assets/thumbnail/thumbnail.png';
import { url, defaultDescription, defaultTitle, address, contact, legalName, foundingDate, logo } from 'data/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},

  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />
      <meta name="application-name" content="&nbsp;" />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />

      <script type="text/javascript">
        {`if (typeof MauticSDKLoaded == 'undefined') {
        var MauticSDKLoaded = true;
        var head            = document.getElementsByTagName('head')[0];
        var script          = document.createElement('script');
        script.type         = 'text/javascript';
        script.src          = 'https://university-of-nevada-las-vegas.contact-server.com/mautic/media/js/mautic-form.js?v4e3bf704';
        script.onload       = function() {
            MauticSDK.onLoad();
        };
        head.appendChild(script);
        var MauticDomain = 'https://university-of-nevada-las-vegas.contact-server.com';
        var MauticLang   = {
            'submittingMessage': "Please wait..."
        }
    }`}
      </script>
    </Helmet>
  );
};

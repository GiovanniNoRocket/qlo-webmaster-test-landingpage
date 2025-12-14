# Main challenges in the web development process

In this project, similar to any real-world development scenario, i encounteres several small challenges, but i have 3 big issues that make the process a little harder. However, there were three major issues that made the development process more difficult.

## The Design Problem

First, I was not familiar with the business logic, so at the very beginning I had no clear idea of what content I could add to the website, including colors, styles, fonts, or any brand-related elements. As a result, the first thing I did was research ideas related to law firms and attorneys’ websites.

I started by analyzing the [Quiroga Law Office website](https://www.quirogalawoffice.com/es/), where I gathered business-related information from the FAQ and media sections. I also discovered related pages through the “Owl Wrapper Slider,” which helped me explore similar websites. After that, I reviewed additional law firm websites for further reference.

With this basic understanding of how the business works and the technical requirements, I began to form ideas about how the website could be structured and designed. In the [Design Definition](./Design.md) document, I explain in more detail the reasoning behind the design decisions.

For the content, I started by reading and analyzing the previously used material. Once I had a clearer understanding, I used AI-generated content, making sure I had enough domain knowledge to avoid inaccurate or misleading information. This was the prompt used:

```cli
In this conversation, you will be LEO, a client who needs a website. You work in the defense of immigrants in the United States and have a strong understanding of how this field operates, including the laws, regulations, organizations, and other entities that influence your work.

Your task in this conversation will be to help define the key points that your website should include. I will ask you questions, and you will provide clear answers, additionally including documentation or explanations that help me better understand each topic.

Keep in mind that the website is intended for your clients, so your responses should be clear, simple, and avoid complex or highly technical language that may be difficult for users to understand.
```

## The responsive Design 

I started with something similar to a wireframe, where I only created the main sections using lorem ipsum content. I followed a “divide and conquer” approach: for each section, I created a separate style file. This helped me track errors more quickly, and if I needed to update something, scrolling or searching through a large file was not necessary.

Once each section was defined, I began working on responsiveness using media queries, starting with the navbar. The navbar was the only component that required a script, since I implemented a burger menu and hid the standard menu on smaller screens.

However, with this initial approach, even after making the changes, the page still showed a large white space on the left side. Because of this, I took my time to first identify which elements required changes in their layout styles before applying further adjustments, and in the end the responsive update was only one commit.


## The Performance Problem

At this point, the page already had its styles defined and was fully responsive, so the final step was optimizing performance using PageSpeed Insights. In the first test, the page showed very poor performance, mainly due to the image used in the hero section. Although the image was already in an optimized format (WebP), the original file had very large dimensions (5,000 × 3,337), and the browser was responsible for rendering and resizing it using HTML properties (width and height), so i create 3 more images difference size to reduce the page load.

Another issue was the use of external resources, specifically the Cloudflare CDN (for icons) and the Google Fonts connection time. In this case, the solution was to use preconnect and prefetch to improve resource loading.

After these changes, the Largest Contentful Paint (LCP) and the First Contentful Paint (FCP) still showed only medium performance, and the overall score was 81, which met the minimum requirement but was not ideal. To improve this, I started optimizing the code to achieve a better FCP by preloading the styles and moving non-critical styles to the noscript section.

As a result, this was the outcome:
[Analysis Lighthouse](https://pagespeed.web.dev/analysis/https-giovanninorocket-github-io-qlo-webmaster-test-landingpage/nlknashffx?hl=en-US&form_factor=mobile)

This led to a significant improvement in FCP; however, the overall score decreased due to a poor CLS (Cumulative Layout Shift) score. Consequently, I adopted a different approach, seeking a better balance to achieve a higher overall performance score. The final result can be seen here:
[Analysis Lighthouse](https://pagespeed.web.dev/analysis/https-giovanninorocket-github-io-qlo-webmaster-test-landingpage/1fwk7is2bg?hl=en-US&form_factor=mobile)

To address this, I made several small adjustments to the styles by using the `contain: layout style` and `flex-shrink: 0` properties to reduce unexpected layout shifts. Additionally, I removed the `noscript` tag from the head section and replaced the default hero image with a smaller version. These changes helped stabilize the layout and improve the overall performance score.

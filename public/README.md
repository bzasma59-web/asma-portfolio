# Adding your own media (photos, videos, reports)

All project media lives in `/public`. Nothing needs a database — just drop
files here and reference them by path in `lib/content.ts`.

## 1. Photos
Put images in `public/projects/`, for example:

    public/projects/my-project-screenshot.jpg

Then reference them in `lib/content.ts`, inside a project's `media.gallery`
array:

    media: {
      gallery: [
        { type: "image", src: "/projects/my-project-screenshot.jpg" }
      ],
      doc: "/docs/my-report.pdf"
    }

## 2. Videos
Put video files (mp4 recommended, keep under ~15-20MB each for fast loading)
in `public/projects/videos/`, for example:

    public/projects/videos/aegisaimail-demo.mp4

Then add it to the same `gallery` array, alongside your images:

    media: {
      gallery: [
        { type: "image", src: "/projects/aegisaimail-architecture.jpg" },
        { type: "video", src: "/projects/videos/aegisaimail-demo.mp4" }
      ],
      doc: "/docs/aegisaimail-pfe-report.pdf"
    }

The gallery renders as a horizontal scroll/swipe carousel on each project
card (with dot indicators), and clicking any item opens it full-screen in
the on-page lightbox — nothing ever navigates away from the site.

If a video is large or hosted elsewhere (YouTube, Google Drive, Vimeo),
you can also just paste the direct file URL as `src` instead of hosting it
locally — just make sure it's a direct link to the video file, not a page
that embeds a player.

## 3. Reports / documents (PDFs)
Put PDF reports in `public/docs/`, for example:

    public/docs/my-report.pdf

Reference them with `media.doc` as shown above. These always open as a
normal link in a new tab (not the lightbox), since they're meant to be
read/downloaded, not viewed inline.

## 4. Where each project's media is set
Everything is in one place: `lib/content.ts`, inside the `projectsByYear`
array (grouped by year) and the `caseStudy` object (for the AegisAIMail
deep-dive section). Find the project by its `title`, then edit its `media`
field.

## 5. CV file
Drop your CV PDF at:

    public/cv/asma-benzaoucha-cv.pdf

The "Download CV" buttons in the navbar and hero already point here.

(function () {
  'use strict';

  function startPlugin() {
    var OriginalCard = Lampa.Template.get('full_start_new');

    Lampa.Template.add(
      'full_start_new',
      `
      <div class="full-start-new">
        <div class="full-start-new__body">
          <div class="full-start-new__left">
            <div class="full-start-new__poster">
              <img class="full-start-new__img full--poster" />
            </div>
          </div>
          <div class="full-start-new__right">
            <div class="full-start-new__head"></div>
            <div class="full-start-new__title">{title}</div>
            <div class="full-start__title-original">{original_title}</div>
            <div class="full-start-new__tagline full--tagline">{tagline}</div>
            <div class="full-start-new__rate-line">
              <div class="full-start__rate rate--tmdb">
                <div>{rating}</div>
                <div class="source--name">TMDB</div>
              </div>
              <div class="full-start__rate rate--imdb hide">
                <div></div>
                <div>IMDB</div>
              </div>
              <div class="full-start__rate rate--kp hide">
                <div></div>
                <div>KP</div>
              </div>
              <div class="full-start__pg hide"></div>
              <div class="full-start__status hide"></div>
            </div>
            <div class="full-start-new__details"></div>
            <div class="full-start-new__reactions">
              <div>#{reactions_none}</div>
            </div>
            <div class="full-start-new__buttons">
              <div class="full-start__button selector button--play">
                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14.5" r="13" stroke="currentColor" stroke-width="2.7" />
                  <path d="M18.0739 13.634C18.7406 14.0189 18.7406 14.9811 18.0739 15.366L11.751 19.0166C11.0843 19.4015 10.251 18.9204 10.251 18.1506L10.251 10.8494C10.251 10.0796 11.0843 9.5985 11.751 9.9834L18.0739 13.634Z" fill="currentColor" />
                </svg>
                <span>#{title_watch}</span>
              </div>
              <div class="full-start__button view--torrent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                  <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M40.5,30.963c-3.1,0-4.9-2.4-4.9-2.4 S34.1,35,27,35c-1.4,0-3.6-0.837-3.6-0.837l4.17,9.643C26.727,43.92,25.874,44,25,44c-2.157,0-4.222-0.377-6.155-1.039L9.237,16.851 c0,0-0.7-1.2,0.4-1.5c1.1-0.3,5.4-1.2,5.4-1.2s1.475-0.494,1.8,0.5c0.5,1.3,4.063,11.112,4.063,11.112S22.6,29,27.4,29 c4.7,0,5.9-3.437,5.7-3.937c-1.2-3-4.993-11.862-4.993-11.862s-0.6-1.1,0.8-1.4c1.4-0.3,3.8-0.7,3.8-0.7s1.105-0.163,1.6,0.8 c0.738,1.437,5.193,11.262,5.193,11.262s1.1,2.9,3.3,2.9c0.464,0,0.834-0.046,1.152-0.104c-0.082,1.635-0.348,3.221-0.817,4.722 C42.541,30.867,41.756,30.963,40.5,30.963z" fill="currentColor" />
                </svg>
                <span>#{full_torrents}</span>
              </div>
              <!-- Additional buttons go here -->
            </div>
          </div>
        </div>
      </div>
      `
    );

    var style = `
      <style>
        .lampac--button {
          // order: -1;
          margin-right: 0.75em;
        }
      </style>
    `;

    Lampa.Template.add('card_css', style);
    $('body').append(Lampa.Template.get('card_css', {}, true));
  }

  startPlugin();
})();

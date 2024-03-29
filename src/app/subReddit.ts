  
export interface SubReddit {
    kind: string;
    data: RedditData;
}
​
export interface RedditData {
    after:      string;
    dist:       number;
    modhash:    string;
    geo_filter: null;
    children:   Child[];
    before:     null;
}
​
export interface Child {
    kind: Kind;
    data: ChildData;
}
​
export interface ChildData {
    approved_at_utc:               null;
    subreddit:                     Subreddit;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           any[];
    subreddit_name_prefixed:       SubredditNamePrefixed;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          LinkFlairCSSClass | null;
    downs:                         number;
    thumbnail_height:              number | null;
    top_awarded_type:              null | string;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         LinkFlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null | string;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   MediaEmbed;
    thumbnail_width:               number | null;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media | null;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            MediaEmbed;
    link_flair_text:               null;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null | string;
    author_flair_richtext:         any[];
    gildings:                      DataGildings;
    post_hint?:                    PostHint;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               AuthorFlairType;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             AuthorFlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null;
    likes:                         null;
    suggested_sort:                null | string;
    banned_at_utc:                 null;
    url_overridden_by_dest:        string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview?:                      DataPreview;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  SubredditID;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       null | string;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media | null;
    is_video:                      boolean;
    crosspost_parent_list?:        CrosspostParentList[];
    crosspost_parent?:             string;
}
​
export interface AllAwarding {
    giver_coin_reward:                    number | null;
    subreddit_id:                         null;
    is_new:                               boolean;
    days_of_drip_extension:               number;
    coin_price:                           number;
    id:                                   string;
    penny_donate:                         number | null;
    award_sub_type:                       AwardSubType;
    coin_reward:                          number;
    icon_url:                             string;
    days_of_premium:                      number;
    tiers_by_required_awardings:          { [key: string]: TiersByRequiredAwarding } | null;
    resized_icons:                        ResizedIcon[];
    icon_width:                           number;
    static_icon_width:                    number;
    start_date:                           null;
    is_enabled:                           boolean;
    awardings_required_to_grant_benefits: number | null;
    description:                          string;
    end_date:                             null;
    subreddit_coin_reward:                number;
    count:                                number;
    static_icon_height:                   number;
    name:                                 string;
    resized_static_icons:                 ResizedIcon[];
    icon_format:                          Format | null;
    icon_height:                          number;
    penny_price:                          number | null;
    award_type:                           AwardType;
    static_icon_url:                      string;
}
​
export enum AwardSubType {
    Appreciation = "APPRECIATION",
    Global = "GLOBAL",
    Group = "GROUP",
    Premium = "PREMIUM",
}
​
export enum AwardType {
    Global = "global",
}
​
export enum Format {
    Apng = "APNG",
    PNG = "PNG",
}
​
export interface ResizedIcon {
    url:     string;
    width:   number;
    height:  number;
    format?: Format | null;
}
​
export interface TiersByRequiredAwarding {
    resized_icons:        ResizedIcon[];
    awardings_required:   number;
    static_icon:          ResizedIcon;
    resized_static_icons: ResizedIcon[];
    icon:                 ResizedIcon;
}
​
export enum AuthorFlairType {
    Text = "text",
}
​
export interface CrosspostParentList {
    approved_at_utc:               null;
    subreddit:                     string;
    selftext:                      string;
    author_fullname:               string;
    saved:                         boolean;
    mod_reason_title:              null;
    gilded:                        number;
    clicked:                       boolean;
    title:                         string;
    link_flair_richtext:           LinkFlairRichtext[];
    subreddit_name_prefixed:       string;
    hidden:                        boolean;
    pwls:                          number;
    link_flair_css_class:          null | string;
    downs:                         number;
    thumbnail_height:              number;
    top_awarded_type:              null | string;
    hide_score:                    boolean;
    name:                          string;
    quarantine:                    boolean;
    link_flair_text_color:         LinkFlairTextColor;
    upvote_ratio:                  number;
    author_flair_background_color: null;
    subreddit_type:                SubredditType;
    ups:                           number;
    total_awards_received:         number;
    media_embed:                   MediaEmbed;
    thumbnail_width:               number;
    author_flair_template_id:      null;
    is_original_content:           boolean;
    user_reports:                  any[];
    secure_media:                  Media;
    is_reddit_media_domain:        boolean;
    is_meta:                       boolean;
    category:                      null;
    secure_media_embed:            MediaEmbed;
    link_flair_text:               null | string;
    can_mod_post:                  boolean;
    score:                         number;
    approved_by:                   null;
    is_created_from_ads_ui:        boolean;
    author_premium:                boolean;
    thumbnail:                     string;
    edited:                        boolean;
    author_flair_css_class:        null;
    author_flair_richtext:         any[];
    gildings:                      CrosspostParentListGildings;
    post_hint:                     PostHint;
    content_categories:            null;
    is_self:                       boolean;
    mod_note:                      null;
    created:                       number;
    link_flair_type:               string;
    wls:                           number;
    removed_by_category:           null;
    banned_by:                     null;
    author_flair_type:             AuthorFlairType;
    domain:                        Domain;
    allow_live_comments:           boolean;
    selftext_html:                 null;
    likes:                         null;
    suggested_sort:                string;
    banned_at_utc:                 null;
    url_overridden_by_dest:        string;
    view_count:                    null;
    archived:                      boolean;
    no_follow:                     boolean;
    is_crosspostable:              boolean;
    pinned:                        boolean;
    over_18:                       boolean;
    preview:                       CrosspostParentListPreview;
    all_awardings:                 AllAwarding[];
    awarders:                      any[];
    media_only:                    boolean;
    link_flair_template_id?:       string;
    can_gild:                      boolean;
    spoiler:                       boolean;
    locked:                        boolean;
    author_flair_text:             null;
    treatment_tags:                any[];
    visited:                       boolean;
    removed_by:                    null;
    num_reports:                   null;
    distinguished:                 null;
    subreddit_id:                  string;
    mod_reason_by:                 null;
    removal_reason:                null;
    link_flair_background_color:   string;
    id:                            string;
    is_robot_indexable:            boolean;
    report_reasons:                null;
    author:                        string;
    discussion_type:               null;
    num_comments:                  number;
    send_replies:                  boolean;
    whitelist_status:              WhitelistStatus;
    contest_mode:                  boolean;
    mod_reports:                   any[];
    author_patreon_flair:          boolean;
    author_flair_text_color:       null;
    permalink:                     string;
    parent_whitelist_status:       WhitelistStatus;
    stickied:                      boolean;
    url:                           string;
    subreddit_subscribers:         number;
    created_utc:                   number;
    num_crossposts:                number;
    media:                         Media;
    is_video:                      boolean;
}
​
export enum Domain {
    DiscordGg = "discord.gg",
    IImgurCOM = "i.imgur.com",
    IReddIt = "i.redd.it",
    RedditCOM = "reddit.com",
    VReddIt = "v.redd.it",
}
​
export interface CrosspostParentListGildings {
    gid_1: number;
}
​
export interface LinkFlairRichtext {
    e: AuthorFlairType;
    t: string;
}
​
export enum LinkFlairTextColor {
    Dark = "dark",
}
​
export interface Media {
    reddit_video: RedditVideo;
}
​
export interface RedditVideo {
    bitrate_kbps:       number;
    fallback_url:       string;
    height:             number;
    width:              number;
    scrubber_media_url: string;
    dash_url:           string;
    duration:           number;
    hls_url:            string;
    is_gif:             boolean;
    transcoding_status: TranscodingStatus;
}
​
export enum TranscodingStatus {
    Completed = "completed",
}
​
export interface MediaEmbed {
}
​
export enum WhitelistStatus {
    AllAds = "all_ads",
}
​
export enum PostHint {
    HostedVideo = "hosted:video",
    Image = "image",
    Link = "link",
}
​
export interface CrosspostParentListPreview {
    images:  PurpleImage[];
    enabled: boolean;
}
​
export interface PurpleImage {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
    variants:    MediaEmbed;
    id:          string;
}
​
export enum SubredditType {
    Public = "public",
}
​
export interface DataGildings {
    gid_1?: number;
    gid_2?: number;
}
​
export enum LinkFlairCSSClass {
    Lc = "lc",
}
​
export interface DataPreview {
    images:                FluffyImage[];
    enabled:               boolean;
    reddit_video_preview?: RedditVideo;
}
​
export interface FluffyImage {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
    variants:    Variants;
    id:          string;
}
​
export interface Variants {
    gif?: GIF;
    mp4?: GIF;
}
​
export interface GIF {
    source:      ResizedIcon;
    resolutions: ResizedIcon[];
}
​
export enum Subreddit {
    Aww = "aww",
}
​
export enum SubredditID {
    T52Qh1O = "t5_2qh1o",
}
​
export enum SubredditNamePrefixed {
    RAww = "r/aww",
}
​
export enum Kind {
    T3 = "t3",
}
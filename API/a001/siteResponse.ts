export interface SiteResponseList {
    ad: boolean;
    ad_ref: string;
    bizseller: boolean;
    checkout: boolean;
    contact_hope: boolean;
    free_shipping: boolean;
    imp_id: string;
    id_adult: boolean;
    is_buncar: boolean;
    is_super_up_shop: boolean;
    location: string;
    max_cpc: null;
    name: string;
    num_comment: string;
    num_faved: string;
    only_neighborhood: boolean;
    outlink_url: string;
    pid: string;
    price: string;
    product_image: string;
    pu_id: null;
    ref_campaign: string;
    status: string;
    style: string;
    super_up: boolean;
    tag: string;
    uid: string;
    update_time: number;
    used: number;
}

export interface SiteResponseDetail {
    item_info: {
        pid: string;
        uid: string;
        name: string;
        status: string;
        price: string;
        ad: boolean;
        style: string;
        group_ids: string;
        groups: string[];
        num_faved: string;
        num_item_view: string;
        num_comment: string;
        user_name: string;
        update_time: number;
        free_shipping: boolean;
        is_free_sharing: boolean;
        is_adult: boolean;
        profile_image: string;
        product_image: string;
        bizseller: boolean;
        checkout: boolean;
        category_id: string;
        category_name: Record<string, string>[];
        description: string;
        description_for_detail: string;
        full_description_webview_url: null;
        full_description_webview_type: null;
        full_description_webview_btn: null;
        tradable: boolean;
        used: boolean;
        used_code: number;
        naver_shopping_url: string;
        image_count: number;
        image_source: string;
        location: string;
        latitude: string;
        longitude: string;
        qty: number;
        keyword: string;
        contact_enabled: boolean;
        comment_enabled: boolean;
        ordernow_enabled: boolean;
        ordernow_label: string;
        ordernow_webview: null;
        ordernow_token_required: boolean;
        ordernow_url: null;
        contact_hope: boolean;
        bunpay: boolean;
        is_location_confirm: number;
        is_buncar: boolean;
        private: boolean;
        only_neighborhood: boolean;
        neighborhood_option: string;
        specification: null;
        extended_spec: string[];
        pay_option: { pay_type: string };
    };
    seller_info: {
        uid: string;
        user_name: string;
        bizseller: boolean;
        num_item: string;
        num_grade_avg: string;
        num_follower: string;
        num_review: string;
        profile_image: string;
        is_withdraw: null;
        join_date: number;
        access_time: number;
        is_identification: boolean;
        badges: {
            label: string;
            badge_type: string;
            created_at: number;
            expired_at: number;
            desc: string;
            status: string;
            image_url: string;
            detail_page_url: string;
        }[];
    };
    result: string;
}

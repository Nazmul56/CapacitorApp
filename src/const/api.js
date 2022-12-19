/* eslint-disable camelcase */
const login_api = 'login'
const questionnaires_api = 'questionnaires'
const outfit_api = 'outfits'
const notification_api = 'all-notifications'
const notification_delete_api = 'dismiss-notification'
const retailer_order_list_api = 'retailer-order-list'
const offer_list_api = 'offer-list'
const retailer_list_api = 'retailer-list'
const event_invitation_api = 'event-invitations'
const retailer_product_api = 'retailer-product-list'
const expert_list_api = 'expert-list'
const work_invitation_api = 'work-invitations'
const contreact_api = 'contracts'
const my_events_api = 'events/my-events'
const live_events_api = 'events/live-events'
const favourite_event_api = 'events/heart'
const event_details_api = 'event-details'
const fetch_retailer_order_by_id = 'retailer-order'
const retailer_order_status_change = 'retailer-order-status-change'
const services_api = 'services'
const retailer_product_management = 'retailer-product-management'
const retailer_shipping_methods__api = 'retailer-shipping-methods'
const retailer_product_status_change = 'retailer-product-status-change'
const user_list = 'users'
const user_details_api = 'user-details'
const affiliate_dashboard_api = 'affiliate/dashboard'
const affiliate_products_api = 'affiliate/products'
const affiliate_total_sale_api = 'affiliate/total-sales-list'
const affiliate_withwdrawal_dashboard_api = 'affiliate/withdrawal/dashboard'
const affiliate_withwdrawal_history_api = 'affiliate/withdrawal/history'
const affiliate_withwdrawal_request_api = 'affiliate/withdrawal/request'
const affiliate_sales_earning_date_api = 'affiliate/sales/earnings-to-date'
const affiliate_sales_earning_product_api = 'affiliate/sales/earnings-by-products'
const dropdown_category_api = 'select-dropdown/category-list'
const dropdown_brand_api = 'select-dropdown/brand-list'
const affiliate_products_event_add_api = 'event-item/create-item'
const event_invitation_acceptDecline = 'event-invitations/accept-decline'
const influencer_list_api = 'influencers'
const my_events_delete_api = 'events'
const search_users_api = 'select-dropdown/all-user-list'
const contact_api = 'contact'
const newsletter_subscribe_api = 'newsletter-subscribe'
const pricing_api = 'subscription-plans'
const get_shopify_products_api = 'get-shopify-products'
const import_shopify_products_api = 'import-shopify-products'
const cart_api = 'cart'
const cart_get_list = 'get-list'
const business_info_api = 'business-info'
const event_create_api = 'events/create-event'
const event_update_api = 'events/update-event'
const get_shopify_configure_api = 'get-shopify-configure'
const shopify_configure_api = 'shopify-configure'
const shopify_disconnect_api = 'shopify-disconnect'
const retailer_stripe_configuration_api = 'retailer-stripe-configuration'
const remove_item_api = 'remove-item'
const my_orders_api = 'my-orders'
const my_order_derails_api = 'my-order'
const send_work_invitation_api = 'send-work-invitation'
const send_invite_user_api = 'events/send-invite-to-user'
const event_add_item_api = 'event-item/create-item'
const user_invitations_list_api = 'event-invitations/user-list'
const select_dropdown_api = 'select-dropdown'
const brand_list_api = 'brand-list'
const event_status_change_api = 'events/status-change'
const chat_user_list_api = 'search-user'
const chat_get_message_api = 'get-message'
const chat_send_message_api = 'send-message'
const brand_dropdown_list_api = 'select-dropdown/brand-list'
const color_dropdown_list_api = 'select-dropdown/color-list'
const category_dropdown_list_api = 'select-dropdown/category-list'
const size_dropdown_list_api = 'select-dropdown/size-list'
const retailer_product_attributes_api = 'retailer-product-attributes'
const closet_item_favorite_api = 'closet-item-favorite'
const offer_api = 'offers'
const change_status_api = 'change-status'
const set_decission_api = 'set-decission'
const user_follow_UnFollow_api = 'follow-unfollow-user'
const user_send_offer_api = 'send-offer'

const get_all_notifications_api = 'all-notifications'
const dismiss_notifications_api = 'dismiss-notification'
const clear_notifications_api = 'clear-notifications'
const retailer_product_store = 'retailer-product-store'

export {
  login_api,
  questionnaires_api,
  outfit_api,
  notification_api,
  notification_delete_api,
  retailer_order_list_api,
  offer_list_api,
  retailer_list_api,
  event_invitation_api,
  retailer_product_api,
  expert_list_api,
  work_invitation_api,
  contreact_api,
  my_events_api,
  live_events_api,
  favourite_event_api,
  event_details_api,
  fetch_retailer_order_by_id,
  retailer_order_status_change,
  services_api,
  retailer_product_management,
  retailer_shipping_methods__api,
  retailer_product_status_change,
  user_list,
  affiliate_dashboard_api,
  affiliate_products_api,
  affiliate_withwdrawal_request_api,
  affiliate_sales_earning_date_api,
  affiliate_sales_earning_product_api,
  dropdown_category_api,
  dropdown_brand_api,
  affiliate_products_event_add_api,
  event_invitation_acceptDecline,
  influencer_list_api,
  affiliate_total_sale_api,
  affiliate_withwdrawal_dashboard_api,
  affiliate_withwdrawal_history_api,
  my_events_delete_api,
  search_users_api,
  contact_api,
  newsletter_subscribe_api,
  pricing_api,
  get_shopify_products_api,
  import_shopify_products_api,
  cart_get_list,
  cart_api,
  business_info_api,
  event_create_api,
  event_update_api,
  get_shopify_configure_api,
  shopify_configure_api,
  shopify_disconnect_api,
  retailer_stripe_configuration_api,
  remove_item_api,
  my_orders_api,
  my_order_derails_api,
  send_work_invitation_api,
  send_invite_user_api,
  event_add_item_api,
  user_invitations_list_api,
  select_dropdown_api,
  brand_list_api,
  event_status_change_api,
  chat_user_list_api,
  chat_get_message_api,
  chat_send_message_api,
  brand_dropdown_list_api,
  color_dropdown_list_api,
  category_dropdown_list_api,
  size_dropdown_list_api,
  retailer_product_attributes_api,
  closet_item_favorite_api,
  offer_api,
  change_status_api,
  set_decission_api,
  get_all_notifications_api,
  dismiss_notifications_api,
  clear_notifications_api,
  user_follow_UnFollow_api,
  user_details_api,
  retailer_product_store,
  user_send_offer_api
}

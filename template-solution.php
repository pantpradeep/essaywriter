<?php /* Template Name: About */

get_header();

sundsvall_buttons();

if ( have_posts() ) {

	while (have_posts()) { the_post(); ?>

		<div class="main-content">
			<div class="innerPageBg">


		<!--  page-header
			=================================================== -->

			<div class="page-header">
				<?php if( class_exists('acf') && get_field('page_header_align') ) { ?>
					<div class="sideSpace text-<?php echo esc_attr( get_field('page_header_align') ) ?>">
				<?php } else { ?>
					<div class="sideSpace">
				<?php }
					
					if( class_exists('acf') && get_field('header_title') ) { ?>

						<h2 class="mb-4"><?php esc_html( the_field('header_title') ); ?></h2>

					<?php } else { ?>

						<h2 class="mb-4"><?php esc_html( the_title() ); ?></h2>
					
					<?php }
					
					if( class_exists('acf') && get_field('header_subtitle') ) { ?>

						<p><?php wp_kses_post( the_field('header_subtitle') ); ?></p>

					<?php } ?>

				</div>
			</div>

			<?php if(has_post_thumbnail()) {

				$caption = get_post(get_post_thumbnail_id())->post_excerpt; ?>

				<div class="section">
					<div class="sideSpace">
						<div class="img text-center">
							<?php the_post_thumbnail();
							if(!empty($caption)) { ?>
								<div class="caption"><span><?php echo esc_html($caption) ?></span></div>
							<?php } ?>
						</div>
					</div>
				</div>

			<?php } ?>



		<!--  content
			=================================================== -->

			<div class="section">
				<div class="sideSpace">
					<?php if( '' !== get_post()->post_content ) {
						the_content();
					} ?>
				</div>
			</div>



		<!--  twitter feed
			=================================================== -->

			<?php
			$username = get_theme_mod('twitter_username');

			if(class_exists('acf') && get_field('twitter_title') && $username) { ?>

				<div class="section">
					<div class="container mt-4">
						<div class="sundsvall_twitter-feed pbox">
							<i class="icon ion-logo-twitter"></i>
								<h3><?php esc_html( the_field('twitter_title') ); ?></h3>
							<div id="twitterFeed" class="owl-carousel owl-theme"></div>
						</div>
					</div>
				</div>

			<?php } ?>
		</div>
		</div> <!-- .main-content -->

	<?php }
}

sundsvall_footer();

get_footer(); ?>